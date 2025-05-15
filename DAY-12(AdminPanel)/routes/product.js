const express = require('express');
const route = express.Router()
const ctl = require('../controller/productCtl');
const passport = require('../middleware/passportSt')
const multer = require('../middleware/catMulter')

route.get('/addProduct', passport.checkAuth, ctl.addPro);
route.post('/addProduct', passport.checkAuth, multer, ctl.addProduct);
route.get('/viewProduct', passport.checkAuth, ctl.viewProduct)

module.exports = route;