
const nodemailer = require('nodemailer');
const emailConfig = require('../config/email.config');

class EmailService {
  constructor() {
    this.retryCount = 0;
    this.primaryTransporter = nodemailer.createTransport(emailConfig.primary);
    this.backupTransporter = nodemailer.createTransport(emailConfig.backup);
  }

  async sendEmail(emailOptions) {
    try {
      await this.primaryTransporter.sendMail(emailOptions);
      this.retryCount = 0; // Reset retry count on success
      console.log('Email sent successfully using the primary service.');
    } catch (error) {
      console.error('Failed to send email using the primary service:', error);
      await this.retrySendEmail(emailOptions);
    }
  }

  async retrySendEmail(emailOptions) {
    if (this.retryCount < emailConfig.retryLimit) {
      this.retryCount++;
      console.log(`Retrying to send email... Attempt ${this.retryCount}`);
      await this.sendEmail(emailOptions);
    } else {
      console.log('Switching to the backup email service.');
      await this.backupTransporter.sendMail(emailOptions);
      this.retryCount = 0; // Reset retry count after using backup service
    }
  }
}

module.exports = new EmailService();
