const adminSchema = require('../models/adminSchema')
const fs = require('fs')
const nodemailer = require('../middleware/nodeMailer');

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
    req.flash("success", "Logged in successfully!");
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

module.exports.profile = (req, res) => {
    res.render('profile')
}

module.exports.forgotPass = (req, res) => {
    res.render('forgotPass');
}

module.exports.otpPage = (req, res) => {
    res.render('varifyOTP')
}

module.exports.forgotPassword = async (req, res) => {
    let admin = await adminSchema.findOne({ email: req.body.email })

    if(!admin) {
        return res.redirect('/')
    }

    let otp = Math.floor(Math.random() * 100000 + 900000)
    nodemailer.sendOTP(req.body.email, otp)

    req.session.otp = otp
    req.session.adminData = admin

    req.flash("error", "OTP has been successfully sent to your email!");
    res.redirect('/varifyOTP')
}

module.exports.varifyOTP = async (req, res) => {
    let otp = req.session.otp
    let admin = req.session.adminData

    if(otp == req.body.otp) {
        if(req.body.pass == req.body.cnfPass) {
            await adminSchema.findByIdAndUpdate(admin._id, { password: req.body.pass }).then(() => {
                res.redirect('/');
            })
        } else {
            req.flash("error", "New password and confirm password should be same!");
            res.redirect('/varifyOTP')
        }
    } else {
        req.flash("error", "Incorrect OTP!");
        res.redirect('/varifyOTP')
    }
}

module.exports.changePass = (req, res) => {
    res.render('changePass');
}

module.exports.changePassword = async (req, res) => {
    let admin = req.user;

    if(admin.password == req.body.oldPass) {
        if(admin.password != req.body.newPass) {
            if(req.body.newPass == req.body.cnfPass) {
                await adminSchema.findByIdAndUpdate(admin.id, { password: req.body.newPass}).then(() => {
                    res.redirect('/');
                })
            } else {
                req.flash("error", "New password and confirm password does not metch");
                res.redirect('/changePass')
            }
        } else {
            req.flash("error", "New password cannot be same as existing password");
            res.redirect('/changePass')
        }
    } else {
        req.flash("error", "Incorrect Old Password!");
        res.redirect('/changePass')
    }
}