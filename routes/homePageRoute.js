var express = require('express');
const homePageController = require('../controllers/homePageController');
var router = express.Router();

router.get('/', homePageController.homeProductsMasc)
router.get('/womanproducts', homePageController.homeProductsFem)









module.exports = router