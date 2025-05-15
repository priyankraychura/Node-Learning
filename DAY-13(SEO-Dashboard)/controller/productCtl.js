const subCatSchema = require('../models/subCatSchema');
const productSchema = require('../models/productSchema');

module.exports.addPro = async (req, res) => {
    await subCatSchema.find({}).then((data) => {
        res.render('addProduct', {data});
    })
}

module.exports.addProduct = async (req, res) => {
    req.body.image = req.file.path;

    await productSchema.create(req.body).then(() => {
        res.redirect('/product/addProduct');
    })
}

module.exports.viewProduct = async (req, res) => {
    await productSchema.find({}).populate({
        path: "subCatId",
        populate: {
            path: "catId"
        }
    }).then((data) => {
        res.render('viewProduct', {data})
    })
}