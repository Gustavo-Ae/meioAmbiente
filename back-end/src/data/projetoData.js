const database = require("../infra/connection")

exports.getTodosOsProjetos = () => {
    return database.query("SELECT * FROM projetos")
}

exports.getProjetoPeloId = (projetoId) => {
    return database.query(`SELECT * FROM projetos WHERE projetos.id = ${projetoId}`)
} 

