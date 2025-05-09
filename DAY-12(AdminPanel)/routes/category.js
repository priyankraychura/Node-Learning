const express = require('express');
const route = express.Router()
const ctl = require('../controller/categoryCtl');
const passport = require('../middleware/passportSt')
const multer = require('../middleware/catMulter')

route.get('/addCat', passport.checkAuth, ctl.addCat);
route.post('/addCat', passport.checkAuth, multer, ctl.addCategory);
route.get('/viewCat', passport.checkAuth, ctl.viewCat)

module.exports = route;