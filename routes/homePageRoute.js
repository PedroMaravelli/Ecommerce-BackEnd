var express = require('express');
const homePageController = require('../controllers/homePageController');
var router = express.Router();

router.get('/api/', homePageController.homeProductsMasc)
router.get('/api/womanproducts', homePageController.homeProductsFem)









module.exports = router