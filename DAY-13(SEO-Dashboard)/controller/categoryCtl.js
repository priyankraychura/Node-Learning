const catSchema = require('../models/catSchema');

module.exports.addCat = (req, res) => {
    res.render('addCat')
}

module.exports.addCategory = async (req, res) => {
    req.body.image = req.file.path
    await catSchema.create(req.body).then(() => {
        res.redirect('/category/viewCat')
    })
}

module.exports.viewCat = async (req, res) => {
    await catSchema.find({}).then((data) => {
        res.render('viewCat', {data})
    })
}