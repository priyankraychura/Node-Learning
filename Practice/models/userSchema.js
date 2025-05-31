const mongoose = require('mongoose');

const schema = mongoose.Schema({
    profile: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

const userSchema = mongoose.model("user", schema);

module.exports = userSchema;