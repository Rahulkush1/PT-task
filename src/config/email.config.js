
module.exports = {
    primary: {
      host: process.env.PRIMARY_SMTP_HOST,
      port: process.env.PRIMARY_SMTP_PORT,
      service: process.env.SMPT_SERVICE,
      secure: process.env.PRIMARY_SMTP_SECURE === 'true',
      auth: {
        user: process.env.PRIMARY_SMTP_USER,
        pass: process.env.PRIMARY_SMTP_PASS,
      },
    },
    backup: {
      host: process.env.BACKUP_SMTP_HOST,
      port: process.env.BACKUP_SMTP_PORT,
      service: process.env.SMPT_SERVICE,
      secure: process.env.BACKUP_SMTP_SECURE === 'true',
      auth: {
        user: process.env.BACKUP_SMTP_USER,
        pass: process.env.BACKUP_SMTP_PASS,
      },
    },
    retryLimit: 3,
  };
  