const nodeMailer = require('nodemailer');
const config = require('config');
const transporter = nodeMailer.createTransport(config.get('mailer.type'), config.get('mailer'));
module.exports = transporter;