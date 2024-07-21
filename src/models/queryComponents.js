const connection = require("./db.js")

class queryComponents {
    //Componentes
    getAllComponents() {
        return new Promise((resolve, reject) => {
            connection.query(
                "select * from componentes",
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    getComponent(component) {
        return new Promise((resolve, reject) => {
            connection.query(
                "select * from componentes where nome = ?",
                component,
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    addComponent(component) {
        return new Promise((resolve, reject) => {
            connection.query(
                "insert into componentes (nome) value (?)",
                component,
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    updateComponent(component, id) {
        return new Promise((resolve, reject) => {
            connection.query(
                "update componentes set nome  = ? where id = ?",
                [component, id],
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    deleteComponent(id) {
        return new Promise((resolve, reject) => {
            connection.query(
                "delete from componentes where id = ?",
                id,
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    //Specs
    getAllSpec() {
        return new Promise((resolve, reject) => {
            connection.query(
                "select * from especificacoes",
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    getSpec(spec) {
        return new Promise((resolve, reject) => {
            connection.query(
                "select * from especificacoes where potencia = ?", 
                spec,
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }


    addSpec(componentId, spec, amount) {
        return new Promise((resolve, reject) => {
            connection.query(
                "insert into especificacoes (id_componente, potencia, amount_components) value (?, ?, ?)",
                [componentId, spec, amount],
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    updateSpec(spec, amount, id) {
        return new Promise((resolve, reject) => {
            connection.query(
                "update especificacoes set potencia = ? , amount_components = ?  where id = ?",
                [spec, amount, id],
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }

    deleteSpec(id) {
        return new Promise((resolve, reject) => {
            connection.query(
                "delete from especificacoes where id = ?",
                id,
                (err, results) => {
                    resolve(results)
                    reject(err)
                }
            )
		})
    }
}

module.exports = new queryComponents()