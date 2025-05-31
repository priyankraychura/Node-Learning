const userSchema = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    let admin = await userSchema.findOne({ email: req.body.email })

    if(admin) {
        return res.status(200).json({ msg: "Email already exists", code: 100 })
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)
    
    await userSchema.create(req.body).then(() => {
        res.status(200).json({ msg: "User registered successfully!" })
    })
} 

module.exports.login = async (req, res) => {
    let admin = await userSchema.findOne({ email: req.body.email });

    if(!admin) {
        res.status(200).json({ msg: "User with email does not exists", code: 100 })
    }

    if(await bcrypt.compare(req.body.password, admin.password)) {
        let token = jwt.sign({admin}, "qwerty", {expiresIn: "1h"})

        res.status(200).json({ msg: "User loggedIn successfully!", token: token })
    } else {
        res.status(200).json({ msg: "Incorrect password!", code: 100 })
    }
}

module.exports.getAllData = async (req, res) => {
    await userSchema.find({}).then((data) => {
        res.status(200).json({ data: data});
    })
}