const firstSchema = require('../model/firstSchema');
const schema = require('../model/firstSchema');
const fs = require('fs')

module.exports.dashboard = (req, res) => {
    res.render('index')
}

module.exports.addAdmin = (req, res) => {
    res.render('addAdmin')
}

module.exports.viewAdmin = async (req, res) => {
    await firstSchema.find({}).then((data) => {
        res.render('viewAdmin', {data})
    })
}

module.exports.addAdminData = async (req, res) => {
    req.body.profile = req.file.path
    
    await firstSchema.create(req.body).then(() => {
        res.redirect('/viewAdmin');
    })
}

module.exports.deleteAdmin = async (req, res) => {
    await firstSchema.findById(req.params.id).then((singleData) => {
        fs.unlinkSync(singleData.profile);        
    })

    await firstSchema.findByIdAndDelete(req.params.id).then(() => {
        res.redirect('/viewAdmin');
    })
}

module.exports.editAdmin = async (req, res) => {
    await firstSchema.findById(req.params.id).then((singleData) => {
        res.render("editAdmin", {singleData});       
    })
}

module.exports.updateAdmin = async (req, res) => {
    let singleData = await firstSchema.findById(req.body.id);

    let img = '';
    
    req.file ? img = req.file.path : img = singleData.profile
    req.body.profile = img
    req.file && fs.unlinkSync(singleData.profile)
    
    await firstSchema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect('/viewAdmin')
    })
}
