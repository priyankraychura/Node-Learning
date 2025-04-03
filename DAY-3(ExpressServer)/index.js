const express = require("express")
const port = 1008;

const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}));

let students = [
    {id: 1, name: "Priyank", subject: "React", city: "Rajkot"}
]

app.get("/", (req, res) => {
    res.render("index", {students})
})

app.post("/addData", (req, res) => {
    students.push(req.body)
    res.redirect("/");
})

app.get("/deleteData", (req, res) => {
    // console.log(req.query);
    let newData = students.filter((item) => item.id != req.query.id);
    students = newData;
    res.redirect("/");
    
})

app.get('/editData/:id', (req, res) => {
    // console.log(req.params);
    let singleUser = students.find((item) => item.id == req.params.id);

    res.render('edit', {singleUser})
})

app.post('/updateData', (req, res) => {
    // console.log(req.body);

    students.forEach((item) => {
        if(item.id == req.body.id) {
            item.name = req.body.name;
            item.subject = req.body.subject;
            item.city = req.body.city;
        } else {
            item
        }
    })

    res.redirect('/');
    
})



app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`App started on port: http://localhost:${port}`);
    }
})
