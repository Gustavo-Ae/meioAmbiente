const database = require("../infra/connection")

exports.criarInvestimento = (idUsuario, idProjeto, valorInvestido) => {
    return database.query(`INSERT INTO investimentos(idUsuario,idProjeto, valorInvestido) VALUES($1,$2,$3)`, [idUsuario, idProjeto, valorInvestido])
}

