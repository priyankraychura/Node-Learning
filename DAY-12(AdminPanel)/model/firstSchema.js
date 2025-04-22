const mongoose = require('mongoose');

const schema = mongoose.Schema({
    profile: {
        type: String,
        required: false
    },
    fname: {
        type: String,
        required: false
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const firstSchema = mongoose.model("Admin", schema);

module.exports = firstSchema
