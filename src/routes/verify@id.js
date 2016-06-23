const gluon = require('gluon');
const collection = require('../collection');
const router = gluon.router();

router.get('/', (req, res) => {
  const status = collection[req.params.id];
  if (status) {
    res.send(status);
  } else {
    res.notFound("#" + req.params.id + " is not exists");
  }
});

router.use((req, res) => res.redirectRequest('use get'));

module.exports = router;