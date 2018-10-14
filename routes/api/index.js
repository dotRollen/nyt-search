const router = require('express').Router();
const articlesRoutes = require('./articles');

module.exports = () => {
  router.route('/wake-up')
    .get((req, res) => res.send('👍'));

  router.use('/articles', articlesRoutes);

  return router;
};
