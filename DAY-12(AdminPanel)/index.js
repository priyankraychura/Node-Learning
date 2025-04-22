const express = require('express');
const path = require('path')
const port = 1008;

const app = express();
const db = require('./config/db')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))
app.use('/uploads', express.static(path.join(__dirname, "uploads")))


app.use('/', require('./routes/route'))

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('http://localhost:' + port);
    }
})