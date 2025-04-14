//  BluePrint of how data is stored in mongodb database
const mongoose = require("mongoose");
const { type } = require("os");

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    }
})

const firstSchema = mongoose.model("student", Schema); // Collection name is => "students" // s added back to the collection name automatically

module.exports = firstSchema;