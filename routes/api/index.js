const router = require('express').Router();
const userRoutes = require('./user-routes');

// add prefix of '/users' to user routes
router.use('/users', userRoutes);

module.exports = router;