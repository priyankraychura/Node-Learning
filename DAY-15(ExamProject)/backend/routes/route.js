const express = require('express');
const ctl = require('../controller/ctl')
const auth = require('../middleware/auth')

const route = express.Router()

route.post('/register', ctl.register)
route.post('/login', ctl.login)
// route.post('/addData', ctl.addData)
route.get('/getAllData', auth, ctl.getAllData)

module.exports = route