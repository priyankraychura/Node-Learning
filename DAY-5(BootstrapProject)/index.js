const express = require("express")
const path = require("path");
const port = 1008;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

let students = [
    {}
]

app.get("/", (req, res) => {
    res.render('index')
})

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Server started on port: ", port);
    }
})
