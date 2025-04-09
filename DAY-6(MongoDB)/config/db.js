const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/NodeLearning");

const db = mongoose.connection;

db.once("open", (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Databse connected");
    }
})

module.exports = db;