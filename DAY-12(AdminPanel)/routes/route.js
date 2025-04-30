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

module.exports = route;