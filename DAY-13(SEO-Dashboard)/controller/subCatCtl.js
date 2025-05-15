const catSchema = require('../models/catSchema');
const subCatSchema = require('../models/subCatSchema');

module.exports.addSubCat = async (req, res) => {
    await catSchema.find({}).then((data) => {
        res.render('addSubCat', {data});
    })
}

module.exports.addSubCategory = async (req, res) => {
    await subCatSchema.create(req.body).then(() => {
        res.redirect('/subcategory/addSubCat');
    })
}

module.exports.viewSubCategory = async (req, res) => {
    await subCatSchema.find({}).populate('catId').then((data) => {
        res.render('viewSubCat', {data})
    })
}