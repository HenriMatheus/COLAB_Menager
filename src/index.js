const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
const flash = require("connect-flash")
const path = require("path")
const routes = require("./routes.js")
const tooBusyCheck = require("./middleware/tooBusy.js")

app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false
}))

require("dotenv").config()
app.use(tooBusyCheck)
app.use(flash())
app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(routes)

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`))