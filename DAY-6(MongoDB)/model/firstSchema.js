//  BluePrint of how data is stored in mongodb database
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
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

const firstSchema = mongoose.model("student", Schema); // Collection name is => "students" // s added back to the collection name automatically

module.exports = firstSchema;