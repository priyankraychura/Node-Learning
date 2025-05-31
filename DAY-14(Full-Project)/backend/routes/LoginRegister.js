const express = require('express');
const route = express.Router()
const auth = require('../middleware/auth')

const ctl2 = require('../controller/LoginRegisterCtl');

route.post('/registerAdmin', ctl2.registerAdmin)
route.post('/loginAdmin', ctl2.loginAdmin)
route.get('/getAllAdmin', ctl2.getAllAdmin)

module.exports = route