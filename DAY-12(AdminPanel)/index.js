const express = require('express');
const path = require('path')
const port = 1008;

const app = express();
const db = require('./config/db')
const cookie = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const connectFlash = require('connect-flash');
const flash = require('./middleware/flash');
const cors = require('cors')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use('/uploads', express.static(path.join(__dirname, "uploads")))
app.use('/catImg', express.static(path.join(__dirname, "catImg")))
app.use(cookie())
app.use(cors({origin: ""})); // For cross origin resource sharing
app.use(express.json()); // For Connecting with frontend

app.use(session({
    name: "local",
    secret: "qwerty",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100*100*60 },
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(connectFlash())
app.use(flash.setFlash)

app.use('/', require('./routes/route'))
app.use('/category', require('./routes/category'))


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('http://localhost:' + port);
    }
})