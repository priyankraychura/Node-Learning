const schema = require('../model/userSchema')
const bcrypt = require('bcryptjs')

module.exports.registerAdmin = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email })
    if(admin) {
        return res.status(200).json({ msg: "User already exists", code: 100});
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)
    console.log(req.body);
    
    await schema.create(req.body).then((data) => {
        return res.status(200).json({ msg: "user registed successfullt" });
    })
}

module.exports.loginAdmin = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email })
    
    if(!admin) {
        return res.status(200).json({ msg: "User does not exists", code: 100});
    }
}