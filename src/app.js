const gluon = require('gluon');
gluon({
  before: (app) => {
  },
  ready: (app, logger) => {
    const mailer = require('./mailer');
    mailer.verify(function (error, success) {
      if (error) {
        logger.error(error.stack);
      } else {
        logger.log('Server is ready to take our messages');
      }
    });
  }
});