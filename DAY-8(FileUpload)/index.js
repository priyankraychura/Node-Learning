const express = require("express");
const path = require("path");
const schema = require("./model/firstSchema")
const db = require("./config/db");
const multer = require('./middleware/multer')

const app = express();
const port = 1008;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", async (req, res) => {
    await schema.find({}).then((students) => {
        res.render('index', {students})
    })
})

app.post("/addData", multer , async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);
    req.body.image = req.file.path

    await schema.create(req.body).then(() => {
        res.redirect("/")
    })
    
})

app.get("/deleteData", async (req, res) => {
    // console.log(req.query);
    await schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect('/')
    })
})

app.get('/editData/:id', async (req, res) => {
    console.log(req.params);
    await schema.findById(req.params.id).then((singleUser) => {
        res.render('edit', {singleUser});
    })
})

app.post('/updateData', async (req, res) => {
    // console.log(req.body);
    await schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect('/')
    })
})

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`App started on port: http://localhost:${port}`);
    }
})
