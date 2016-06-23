const gluon = require('gluon');
gluon({
  before: (app) => {},
  ready: (app) => {
    const mailer = require('./mailer');
  }
});