const schema = require('../model/firstSchema');
const fs = require('fs')

module.exports.firstPage = async (req, res) => {
    await schema.find({}).then((data) => {
        res.render('index', {data})
    })
}

module.exports.addData = async (req, res) => {
    // console.log(req.file);
    req.body.profile = req.file.path
    
    await schema.create(req.body).then(() => {
        res.redirect('/');
    })
}

module.exports.deleteData = async (req, res) => {
    let singleData = await schema.findById(req.params.id);
    fs.unlinkSync(singleData.profile);

    await schema.findByIdAndDelete(req.params.id).then(() => {
        res.redirect('/')
    })
}

module.exports.editData = async (req, res) => {
    // console.log(req.params);
    
    await schema.findById(req.params.id).then((singleData) => {
        res.render('edit', {singleData});
    })
}

module.exports.updateData = async (req, res) => {
    console.log(req.file);
    let singleData = await schema.findById(req.body.id);
    let img = ''

    req.file ? img = req.file.path : img = singleData.profile
    req.file && fs.unlinkSync(singleData.profile)

    req.body.profile = img

    await schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect('/')
    })
}