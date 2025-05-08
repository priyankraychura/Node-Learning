const firstSchema = require('../model/firstSchema');
const fs = require('fs')
const mailer = require('../middleware/nodemailer');

module.exports.loginPage = (req, res) => {
    res.render('login')
}

module.exports.dashboard = (req, res) => {
    res.render('index')
}

module.exports.addAdmin = (req, res) => {
    res.render('addAdmin')
}

module.exports.viewAdmin = async (req, res) => {
    await firstSchema.find({}).then((data) => {
        res.render('viewAdmin', { data })
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
        res.render("editAdmin", { singleData });
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

module.exports.loginAdmin = (req, res) => {
    req.flash("success", "Logged in successfully!")
    res.redirect('/dashboard')

}

module.exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/')
}

module.exports.changePassword = (req, res) => {
    res.render('changePass')
}

module.exports.changePass = async (req, res) => {
    let admin = req.user;

    if (admin.password == req.body.oldPass) {
        if (admin.password != req.body.newPass) {
            if (req.body.newPass == req.body.confirmPass) {
                await firstSchema.findByIdAndUpdate(admin.id, {password: req.body.newPass}).then(() => {
                    res.redirect("/logout");
                })
            } else {
                req.flash("error", "New Password and confirm password should be same!");
                res.redirect("/changePassword");
            }
        } else {
            req.flash("error", "New Password is same as previous!");
            res.redirect("/changePassword");
        }
    } else {
        req.flash("error", "Old Password is Incorrect!");
        res.redirect("/changePassword");
    }
}

module.exports.varifyPassword = (req, res) => {
    res.render('varifyPass')
}

module.exports.lostPass = async (req, res) => {
    let admin = await firstSchema.findOne({ email: req.body.email })

    if (!admin) {
        return res.redirect('/')
    }

    let otp = Math.floor(Math.random() * 100000 + 900000)
    mailer.sendOTP(req.body.email, otp);

    req.session.otp = otp
    req.session.adminData = admin;

    res.render('varifyPass');
}

module.exports.varifyPass = async (req, res) => {
    let admin = req.session.adminData
    let otp = req.session.otp

    if (otp == req.body.otp) {
        if (req.body.newPass == req.body.confirmPass) {
            await firstSchema.findByIdAndUpdate(admin._id, { password: req.body.newPass }).then(() => {
                res.redirect('/');
            })
        } else {
            req.flash("error", "New Password and confirm password should be same!");
            res.redirect('/varifyPass')
        }
    } else {
        req.flash("error", "Incorrect OTP!");
        res.redirect('/varifyPass')        
    }

}

