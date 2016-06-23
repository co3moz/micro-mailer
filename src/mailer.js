const nodeMailer = require('nodemailer');
const config = require('config');
const transporter = nodeMailer.createTransport(require('nodemailer-smtp-transport')(config.get('mailer')));
module.exports = transporter;
