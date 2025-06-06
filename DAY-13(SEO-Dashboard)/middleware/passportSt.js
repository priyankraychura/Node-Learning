const passport = require('passport');
const localSt = require('passport-local').Strategy;
const adminSchema = require('../models/adminSchema');
const firstSchema = require('../models/adminSchema');

passport.use('local', new localSt (
    {usernameField: "email"},
    async (email, password, done) => {
        let admin = await adminSchema.findOne({email: email})

        if(admin) {
            if(admin.password == password) {
                return done(null, admin)
            } else {
                return done(null, false)
            }
        } else {
            return done(null, false)
        }
    }
))

passport.serializeUser((admin, done) => {
    done(null, admin.id)
})

passport.deserializeUser( async (adminId, done) => {
    let admin = await firstSchema.findById(adminId);

    if(admin) {
        done(null, admin)
    } else {
        done(null, false)
    }   
})

passport.checkAuth = (req, res, next) => {
    if(req.isAuthenticated()) {
        res.locals.admin = req.user
        next();
    } else {
        res.redirect('/')
    }
}

module.exports = passport