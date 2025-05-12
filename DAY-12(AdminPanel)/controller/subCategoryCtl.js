const catSchema = require('../model/catSchema');
const subCatSchema = require('../model/subCatSchema');

module.exports.addSubCat = async (req, res) => {
    await catSchema.find({}).then((data) => {
        res.render('addSubCat', {data})
    })
}

module.exports.addSubCategory = async (req, res) => {
    await subCatSchema.create(req.body).then(() => {
        res.redirect('/subcategory/addSubCat')
    })
    
}

module.exports.viewSubCat = async (req, res) => {
    
}