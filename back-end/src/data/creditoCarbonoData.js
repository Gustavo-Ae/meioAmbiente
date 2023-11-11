const database = require("../infra/connection")

exports.criarCreditoCarbono = (idUsuario, idProjeto, emissaoReduzida) => {
    return database.query(`INSERT INTO creditocarbono(idUsuario,idProjeto, emissaoReduzida) VALUES($1,$2,$3)`,[idUsuario,idProjeto,emissaoReduzida])
}

exports.obterQuantidadeCreditoCarbono = (idUsuario) => {
    return database.query(`SELECT COUNT(*) FROM creditoCarbono WHERE creditoCarbono.idusuario = ${idUsuario}`)
}

exports.obterTodosCreditosCarbono = (idUsuario) => {
    return database.query(`SELECT c.dataemissao,c.emissaoreduzida,p.nome,p.imagem_url FROM creditocarbono c INNER JOIN projetos p on p.id = c.idprojeto WHERE c.idusuario =${idUsuario}`)
}