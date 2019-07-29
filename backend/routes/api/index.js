const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');

router.use('/auth', require('./Auth.route'));

router.use('/user', auth, require('./User.route'));

module.exports = router;