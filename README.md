# Notification Service

This is a Notification Service built using Nest.js. The service sends emails with retry logic, utilizing `notifme-sdk` and `nodemailer`.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Testing Email Functionality](#testing-email-functionality)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

## Installation

Follow these steps to set up the project on your local machine.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/notification-service.git
   cd notification-service
   ```
   
2. Install dependencies:

Make sure you have Node.js installed.

```bash
npm install
```

3. **Set up the environment variables:**

Create a .env file in the root directory of the project and add the necessary environment variables (details in the Environment Variables section).

# SMTP configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password

PRIMARY_SMTP_HOST=smpt.gmail.com
SMPT_SERVICE= gmail
PRIMARY_SMTP_PORT=465
PRIMARY_SMTP_USER=""
PRIMARY_SMTP_PASS=""
BACKUP_SMTP_HOST=smpt.gmail.com
BACKUP_SMTP_PORT=465
BACKUP_SMTP_USER=""
BACKUP_SMTP_PASS=""
retryLimit= 3

