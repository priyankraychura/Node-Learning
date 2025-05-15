const express = require('express');
const route = express.Router();
const ctl = require('../controller/productCtl');
const multer = require('../middleware/multer')
const passport = require('../middleware/passportSt');

route.get('/addProduct', passport.checkAuth, ctl.addPro);
route.post('/addProduct',  multer, passport.checkAuth, ctl.addProduct);
route.get('/viewProduct', passport.checkAuth, ctl.viewProduct);

module.exports = route