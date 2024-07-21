function autenticate(req, res, next) {
    req.session.use ? next() : res.redirect("/error_session")
}

module.exports = autenticate