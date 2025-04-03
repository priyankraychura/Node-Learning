const { log } = require('console');
const express = require('express')
const port = 1008;

const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));

let tasks = [
    { id: 1, task: "Complete WebApp", priority: "high" }
]

app.get("/", (req, res) => {
    res.render("index", { tasks })
})

app.post("/addTask", (req, res) => {
    // console.log(req.body);
    tasks.push(req.body);

    res.redirect('/');
})

app.get("/deleteTask/:id", (req, res) => {
    tasks.filter((item) => item.id != req.params.id);

    res.redirect('/');
})

app.get("/updateData/:id", (req, res) => {
    let singleTask = tasks.find((item) => item.id == req.params.id);

    res.render('edit', { singleTask });
})

app.post("/editTask", (req, res) => {
    console.log(req.body);

    tasks.forEach((item) => {
        if (item.id == req.body.id) {
            item.task = req.body.task
            item.priority = req.body.priority
        } else {
            item
        }
    })

    res.redirect('/')
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server started on port: " + port);

    }
})