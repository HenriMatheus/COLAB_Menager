const toobusy = require("toobusy-js")

function tooBusyCheck(req, res, next) {
    toobusy() ? res.status(503): next()
}

module.exports = tooBusyCheck