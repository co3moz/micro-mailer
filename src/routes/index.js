const gluon = require('gluon');
const router = gluon.router();

router.use((req, res) => res.redirectRequest('use /send'));

module.exports = router;