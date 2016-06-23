const gluon = require('gluon');
const control = require('gluon/control');
const logger = require('gluon/logger');
const config = require('config');
const router = gluon.router();
const collection = require('../collection');

const mailer = require('../mailer');

var index = 1;
router.post('/', control(["subject", "to", "content", "type"]), (req, res) => {
  const options = req.body;
  options.from = options.from || config.get('from');
  const content = options.content;
  if (options.type == 'html') {
    options.html = content;
  } else if (options.type == 'text') {
    options.text = content;
  } else {
    return res.badRequest('invalid type; html or text supported');
  }

  const id = index++;
  res.send('#' + id + ' sending in progress');
  logger.log('#{1} Sending {type} mail to {to} from {from}', options, id);
  collection.going(id);

  delete options.type;
  delete options.content;

  mailer.sendMail(options, (error, info) => {
    if (error) {
      collection.error(id, error.message);
      return logger.error('#' + id + ' returned error! ' + error.stack)
    }
    logger.log('#{0} Mail sent!', id);
    collection.sent(id);
  });
});

router.use((req, res) => res.redirectRequest('use post'));

module.exports = router;