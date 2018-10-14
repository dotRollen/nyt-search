const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

module.exports = () => {
  // API Routes
  router.use('/api/v1', apiRoutes);

  // If no API routes are hit, send the React app
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  return router;
};
