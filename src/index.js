const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
const flash = require("connect-flash")
const path = require("path")
const routes = require("./routes.js")
const tooBusyCheck = require("./middleware/tooBusy.js")

const redisClient = redis.createClient({
    host: "178.156.145.189",
    port: 6379
})

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
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

app.listen(process.env.PORT, () => console.log("https://colab.manager-01.interleads.shop/"))