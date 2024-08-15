
const express = require('express');
const bodyParser = require('body-parser');
const notificationController = require('./controllers/notification.controller');

const app = express();
app.use(bodyParser.json());

app.post('/send-notification', (req, res) => notificationController.sendNotification(req, res));

module.exports = app;
