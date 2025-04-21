const express = require('express');
const ctl = require('../controller/ctl');
const multer = require('../middleware/multer');
const route = express.Router();

route.get('/', ctl.homePage);
route.get('/addMovie', ctl.addMoviePage);
route.post('/addMovie', multer, ctl.addMovie);
route.get('/deleteMovie/:id', ctl.deleteMovie);
route.get('/editMovie/:id', ctl.editMoviePage);
route.post('/editMovie', multer, ctl.editMovie)

module.exports = route;