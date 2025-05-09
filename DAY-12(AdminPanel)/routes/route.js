const express = require('express');
const route = express.Router();
const ctl = require('../controller/ctl')
const multer = require('../middleware/multer')
const passport = require('../middleware/passportSt');

route.get("/", ctl.loginPage)
route.get("/dashboard", passport.checkAuth, ctl.dashboard)
route.get("/addAdmin", passport.checkAuth, ctl.addAdmin)
route.get("/viewAdmin", passport.checkAuth, ctl.viewAdmin)
route.post("/addAdmin", passport.checkAuth, multer, ctl.addAdminData);
route.get("/deleteAdmin/:id", passport.checkAuth, ctl.deleteAdmin)
route.get("/editAdmin/:id", passport.checkAuth, ctl.editAdmin)
route.post("/updateAdmin", passport.checkAuth, multer, ctl.updateAdmin)
route.post("/loginAdmin", passport.authenticate("local", {failureFlash: "/"}), ctl.loginAdmin);
route.get("/logout", passport.checkAuth, ctl.logout)
route.get('/changePassword', passport.checkAuth, ctl.changePassword)
route.post('/changePass', passport.checkAuth, ctl.changePass);
route.get('/varifyPass', ctl.varifyPassword)
route.post("/lostPass", ctl.lostPass);
route.post("/varifyOTP", ctl.varifyPass);
route.get("/profile", passport.checkAuth, ctl.profile)

module.exports = route;