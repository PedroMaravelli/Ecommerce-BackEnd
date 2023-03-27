var express = require('express');
const controllerUsers = require('../controllers/controllerUsers');
const validationsRegister = require('../midlawares/midlawareUsers');
var router = express.Router();


router.post('/register', validationsRegister, controllerUsers.register );

module.exports = router;
