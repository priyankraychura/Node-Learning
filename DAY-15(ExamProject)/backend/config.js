const mongoose = require('mongoose');

mongoose.connect(process.env.URL)

const db = mongoose.connection

db.once('open', (err) => {
    err ? console.log(err) : console.log("Database connected!")
})

module.exports = db