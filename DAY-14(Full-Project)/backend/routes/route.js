const express = require('express');
const route = express.Router()
const ctl = require('../controller/ctl')
const ctl2 = require('../controller/LoginRegisterCtl');

// route.post('/addData', ctl.addData)
// route.get('/getData', ctl.getData)
// route.delete('/deleteData', ctl.deleteData)
// route.put('/updateData', ctl.updateData);

route.post('/registerAdmin', ctl2.registerAdmin)
route.post('/loginAdmin', ctl2.loginAdmin)

module.exports = route