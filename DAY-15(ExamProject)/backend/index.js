const express = require('express');
const env = require('dotenv').config();
const cors = require('cors');

const db = require('./config')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use('/', require('./routes/route'))

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`http://localhost:${process.env.PORT}`)
})