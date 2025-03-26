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

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`App started on port: http://localhost:${port}`);
    }
})
