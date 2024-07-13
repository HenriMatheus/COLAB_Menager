const queryLoan = require("../models/queryLoan.js")
const queryComponents = require("../models/queryComponents.js")

class loanController {
    async getOutstandingLoans(req, res) {
        try {
            const allLoans = await queryLoan.getAllLoans()
            let loansOutstanding = []

            for (let loan of allLoans) {
                if (loan.status == 0) {
                    loansOutstanding.push(loan)
                }
            }
            res.render("aceptLoan", {loans: loansOutstanding})
        } catch(err) {
            console.error(err)
        }
    }

    async aceptLoan(req, res) {
        const values = req.body

        try {
            for (let i in values) {
                await queryLoan.updateLoan(Number(values[i]))
            }
        } catch(err) {
            console.error(err)
        }

        res.json({message: "Emprestimo aceito"})
    }

    async rejectLoan(req, res) {
        const values = req.body

        try {
            for (let i in values) {
                await queryLoan.dellLoan(Number(values[i]))
            }
        } catch(err) {
            console.error(err)
        }

        res.json({message: "Emprestimo recusado"})
    }

    async getLoans(req, res) {
        try {
            const allLoans = await queryLoan.getAllLoans()
            let loansAccepted = []

            for (let loan of allLoans) {
                if (loan.status == 1) {
                    loansAccepted.push(loan)
                }
            }

            res.render("loanManagers", {loans: loansAccepted})
        } catch(err) {
            console.error(err)
        }
    }

    async getLoansByRegistration(req, res) {
        const registration = req.body.registration
        try {
            const loans = await queryLoan.getLoan(registration)
            res.render("loanManagers", {loans: loans})
        } catch(err) {
            console.error(err)
        }
    }
    
    async applyForLoan(req, res) {
        const values = req.body
        
        for (let i in values) {
            try {
                const specs = await queryComponents.getSpec(values[i].spec)
                
                if (specs && values[i].amount <= specs[0].amount_components) {
                    queryLoan.addLoan(
                        values[i].registration, 
                        values[i].component, 
                        values[i].spec, 
                        values[i].amount
                    )
                    
                    queryComponents.updateSpec(
                        specs[0].potencia, 
                        parseInt(specs[0].amount_components) - values[i].amount,
                        specs[0].id
                    )
                }
            } catch(err) {
                console.error(err)
            }
        }

        res.json({message: "Dados recebidos com sucesso"})
    }

    async confirmReturn(req, res) {
        const ids = req.body

        try {
            for (let i in ids) {
                await queryLoan.dellLoan(Number(ids[i]))
            }
        } catch(err) {
            console.error(err)
        }
        
        res.json({message: "Devolução confirmada"})
    }
}

module.exports = new loanController()