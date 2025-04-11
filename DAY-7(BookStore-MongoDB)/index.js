const express = require('express');
const port = 1008;
const path = require('path');
const db = require("./config/db");
const booksModel = require("./model/booksModel");

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));


app.get('/', async (req, res) => {
    await booksModel.find({}).then((books) => {
        res.render('index', {books});
    })
})

app.get('/addBook', (req, res) => {
    res.render('add');
})

app.post('/addBook', async (req, res) => {
   await booksModel.create(req.body).then(() => {
    res.redirect("/");
   })
})

app.get('/deleteBook/:id', async (req, res) => {
    await booksModel.findByIdAndDelete(req.params.id).then(() => {
        res.redirect('/')
    })
})

app.get('/editBook/:id', async (req, res) => {
    await booksModel.findById(req.params.id).then((singleBook) => {
        res.render('editBook', {singleBook});
    })
})

app.post('/editBook', async (req, res) => {
    await booksModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect('/');
    })
})

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`App started on port: http://localhost:${port}`);        
    }
})