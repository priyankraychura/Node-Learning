const adminSchema = require('../models/adminSchema')
const fs = require('fs')

module.exports.dashboard = async (req, res) => {
    await adminSchema.find({}).then((admins) => {
        res.render('index', { admins })
    })
}

module.exports.loginPage = (req, res) => {
    res.render('login')
}

module.exports.registerPage = (req, res) => {
    res.render('register')
}

module.exports.addData = (req, res) => {
    res.render('forms')
}

module.exports.register = async (req, res) => {
    req.body.profile = req.file.path;

    await adminSchema.create(req.body).then(() => {
        res.redirect('/dashboard')
    })
}

module.exports.deleteAdmin = async (req, res) => {
    let admin = await adminSchema.findById(req.params.id);
    fs.unlinkSync(admin.profile)

    await adminSchema.findByIdAndDelete(req.params.id).then(() => {
        res.redirect('/dashboard');
    })
}

module.exports.login = async (req, res) => {
    res.redirect('/dashboard')
}

module.exports.logout = async (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

module.exports.edit = async (req, res) => {
    await adminSchema.findById(req.params.id).then((admin) => {
        res.render('edit', { admin })
    })
}

module.exports.update = async (req, res) => {
    let admin = await adminSchema.findById(req.body.id)
    let img = '';

    req.file ? img = req.file.path : img = admin.profile;
    req.file && fs.unlinkSync(admin.profile);
    req.body.profile = img;
    
    await adminSchema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect('/dashboard');
    })
}