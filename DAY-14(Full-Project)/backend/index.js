const express = require('express');
const PORT = 1008

const app = express()
const db = require('./config')
const cors = require('cors');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/', require('./routes/route'))

app.listen(PORT, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('http://localhost:' + PORT);
    }
})
