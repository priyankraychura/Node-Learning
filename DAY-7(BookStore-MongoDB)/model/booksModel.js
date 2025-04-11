const mongoose = require("mongoose");

const books = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const booksModel = mongoose.model("book", books); 

module.exports = booksModel;