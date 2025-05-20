const express = require('express');
const route = express.Router()

const ctl2 = require('../controller/LoginRegisterCtl');

route.post('/registerAdmin', ctl2.registerAdmin)
route.post('/loginAdmin', ctl2.loginAdmin)

module.exports = route