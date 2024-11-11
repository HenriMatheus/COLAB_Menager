function autenticate(req, res, next) {
    req.session.accessToken ? next() : res.redirect("/error_session")
}

module.exports = autenticate