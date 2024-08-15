const emailService = require('../services/email.service');

class NotificationController {
  async sendNotification(req, res) {
    const { to, subject, text, html } = req.body;

    const emailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text,
      html,
    };

    try {
      await emailService.sendEmail(emailOptions);
      res.status(200).send('Notification sent successfully.');
    } catch (error) {
      res.status(500).send('Failed to send notification.');
    }
  }
}

module.exports = new NotificationController();
