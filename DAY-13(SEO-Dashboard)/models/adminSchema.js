const mongoose = require('mongoose');

const schema = mongoose.Schema({
    profile: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
})

const adminSchema = mongoose.model("seoAdmin", schema);

module.exports = adminSchema;