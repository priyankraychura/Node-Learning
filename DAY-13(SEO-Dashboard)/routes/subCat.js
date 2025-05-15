const express = require('express');
const route = express.Router();
const ctl = require('../controller/subCatCtl');
const passport = require('../middleware/passportSt');

route.get('/addSubCat', passport.checkAuth, ctl.addSubCat);
route.post('/addSubCat', passport.checkAuth, ctl.addSubCategory);
route.get('/viewSubCat', passport.checkAuth, ctl.viewSubCategory);

module.exports = route