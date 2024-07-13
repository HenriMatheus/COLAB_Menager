const connection = require("./db.js")

class queryLoan {
    getAllLoans() {
        return new Promise((resolve, reject) => {
            connection.query(
                "select * from loanComponents",
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    getLoan(value) {
        return new Promise((resolve, reject) => {
            connection.query(
                "select * from loanComponents where registration = ?",
                value,
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    addLoan(registration, component, espec, amount) {
        return new Promise((resolve, reject) => {
            connection.query(
                "insert into loanComponents (registration, nome_componente, specs, quantidade) values (?, ?, ?, ?)",
                [registration, component, espec, amount],
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    updateLoan(id) {
        return new Promise((resolve, reject) => {
            connection.query(
                "update loanComponents set status = 1 where id = ?",
                id,
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    dellLoan(id) {
        return new Promise((resolve, reject) => {
            connection.query(
                "delete from loanComponents where id = ?",
                id,
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }
}

module.exports = new queryLoan()