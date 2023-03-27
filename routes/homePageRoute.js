var express = require('express');
const controllerHomePage = require('../controllers/controllerHomePage');
var router = express.Router();

router.get('/api/', controllerHomePage.homeProductsMasc)
router.get('/api/womanproducts', controllerHomePage.homeProductsFem)



module.exports = router