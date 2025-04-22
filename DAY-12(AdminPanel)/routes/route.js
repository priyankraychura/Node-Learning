const express = require('express');
const route = express.Router();
const ctl = require('../controller/ctl')
const multer = require('../middleware/multer')

route.get("/", ctl.dashboard)
route.get("/addAdmin", ctl.addAdmin)
route.get("/viewAdmin", ctl.viewAdmin)
route.post("/addAdmin", multer, ctl.addAdminData);
route.get("/deleteAdmin/:id", ctl.deleteAdmin)
route.get("/editAdmin/:id", ctl.editAdmin)
route.post("/updateAdmin", multer, ctl.updateAdmin)

module.exports = route;