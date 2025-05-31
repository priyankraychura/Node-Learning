const express = require('express');
const ctl = require('../controller/ctl')
const multer = require('../middleware/multer');

const route = express.Router();


route.get('/', ctl.HomePage)
route.post('/addData', multer, ctl.addData)
route.get('/viewData', ctl.viewData);

module.exports = route