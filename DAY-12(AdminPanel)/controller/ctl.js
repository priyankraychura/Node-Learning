const schema = require('../model/firstSchema');
const fs = require('fs')

module.exports.dashboard = (req, res) => {
    res.render('index')
}

module.exports.addAdmin = (req, res) => {
    res.render('addAdmin')
}

module.exports.viewAdmin = (req, res) => {
    res.render('viewAdmin')
}

