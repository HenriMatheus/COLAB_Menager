const path = require("path")
const router = require("express").Router()
const usersControll = require("./controller/usercontroller.js")
const componentsControll = require("./controller/componentsController.js")
const loanController = require("./controller/loanController.js")
const usercontroller = require("./controller/usercontroller.js")

function autenticate(req, res, next) {
    req.session.use ? next() : res.redirect("/error_session")
}

router.get("/", (req, res) => res.render("login", {flash: req.flash("loginError")}))
router.post("/login", usersControll.login)
router.get("/home/:registration", autenticate, componentsControll.listComponents)
router.post("/searchComponent/:registration", autenticate, componentsControll.searchComponent)
router.get("/loans", autenticate, loanController.getLoans)
router.post("/searchLoans", autenticate, loanController.getLoansByRegistration)
router.post("/requestComponents", autenticate, loanController.applyForLoan)
router.post("/confirmReturns", autenticate, loanController.confirmReturn)
router.get("/addComponent", autenticate,(req, res) => res.render("addComponent"))
router.get("/updateComponent", autenticate,(req, res) => res.render("updateComponent"))
router.get("/dellComponent", autenticate,(req, res) => res.render("dellComponent"))
router.post("/addComponent/newComponent", autenticate, componentsControll.newComponent)
router.post("/updateComponent/newUpdate", autenticate, componentsControll.updatingComponent)
router.post("/dellComponent/removeComponent", autenticate, componentsControll.deleteComponents)
router.get("/logout", autenticate, usercontroller.logout)
router.get("/error_session", (req, res) => res.sendFile(path.join(__dirname, "..", "public", "html", "errorSession.html")))

module.exports = router