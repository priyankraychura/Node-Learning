const express = require('express')
const PORT = 1008
const path = require('path');
const cors = require('cors');
const sesssion = require('express-session');

const db = require('./config/database')

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/route'))
app.use(cors())
app.use(sesssion({
    name: "local",
    secret: "qwerty",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100*100*60 }
}))

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`http://localhost:${PORT}`);    
})
