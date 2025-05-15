const express = require('express');
const route = express.Router();
const ctl = require('../controller/ctl');
const multer = require('../middleware/multer');
const passport = require('../middleware/passportSt');

route.get('/', ctl.loginPage)
route.get('/dashboard', passport.checkAuth, ctl.dashboard)
route.get('/register', ctl.registerPage)
route.post('/register', multer, ctl.register)
route.post('/login',passport.authenticate("local", {failureRedirect: '/'}) , ctl.login);
route.get('/deleteAdmin/:id', passport.checkAuth, ctl.deleteAdmin);
route.get('/logout', passport.checkAuth, ctl.logout);
route.get('/edit/:id', passport.checkAuth, ctl.edit);
route.post('/update', multer, ctl.update);
route.get('/profile', passport.checkAuth, ctl.profile)

route.get('/forgotPass', ctl.forgotPass)
route.post('/forgotPass', ctl.forgotPassword)
route.get('/varifyOTP', ctl.otpPage);
route.post('/varifyOTP', ctl.varifyOTP)
route.get('/changePass', passport.checkAuth, ctl.changePass)
route.post('/changePass', passport.checkAuth, ctl.changePassword)

module.exports = route