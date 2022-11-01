const express = require('express');
const { login, dashboard } = require('../controllers/main');
const authorizationMiddleware = require('../middleware/auth');

const router = express.Router();

router.route('/dashboard').get(authorizationMiddleware, dashboard);
router.route('/login').post(login);

module.exports = router;
