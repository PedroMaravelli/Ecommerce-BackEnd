var express = require('express');
const homePageController = require('../controllers/homePageController');
var router = express.Router();

router.get('/', homePageController.homeProductsMasc)









module.exports = router