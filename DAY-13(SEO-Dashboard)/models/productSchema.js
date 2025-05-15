const mongoose = require('mongoose');

const schema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    subCatId: {
        type: mongoose.Types.ObjectId,
        ref: "subcategorie",
        required: true
    }
})

const productSchema = mongoose.model("product", schema)

module.exports = productSchema;