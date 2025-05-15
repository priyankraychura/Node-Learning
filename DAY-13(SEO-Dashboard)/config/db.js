const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/NodeExam');

const db = mongoose.connection;

db.once('open', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Database connected");
    }
})

module.exports = db;