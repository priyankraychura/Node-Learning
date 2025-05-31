const userSchema = require('../models/userSchema');

module.exports.HomePage = (req, res) => {  
    res.render('index')
}

module.exports.addData = async (req, res) => {
    req.body.profile = req.file.path

    req.session.data = req.body
    
    await userSchema.create(req.body).then(() => {
        res.redirect('/')
    })
}

module.exports.viewData = (req, res) => {
    console.log(req.session.data);
    
}