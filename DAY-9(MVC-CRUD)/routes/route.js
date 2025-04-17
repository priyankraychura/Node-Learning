const express = require('express');
const route = express.Router();
const ctl = require('../controller/ctl')
const multer = require('../middleware/multer')

route.get("/", ctl.firstPage)
route.post("/addData", multer, ctl.addData)
route.get("/deleteData/:id", ctl.deleteData)
route.get("/editData/:id", ctl.editData)
route.post("/updateData", multer, ctl.updateData)

module.exports = route;