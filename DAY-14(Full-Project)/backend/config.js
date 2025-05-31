const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://priyankraychura:aUw5SAr1LXB0Axlo@cluster0.zahhaii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log(err);
    })

// const db = mongoose.connection

// db.once("open", (err) => {
//     err ? console.log(err) : console.log("DB Connected")    
// })

module.exports = mongoose;

// mongodb aggression, indexing
// web socket, pagination, limit, event emmiter, event driven architecture