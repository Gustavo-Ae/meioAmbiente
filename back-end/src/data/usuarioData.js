const database = require("../infra/connection")

exports.criarUsuario = (userData, hashSenha) => {
    return database.query(`INSERT INTO usuarios(nome, email, cpf, senha) VALUES($1, $2,$3, $4)`,[userData.nome, userData.email, userData.cpf, hashSenha]);
}

exports.getUsuarioPeloEmail = (email) => {
    return database.oneOrNone(`SELECT * FROM usuarios WHERE usuarios.email = '${email}'`)
}

exports.getUsuarioPeloId = (id) => {
    return database.oneOrNone(`SELECT us.nome,us.email,us.cpf FROM usuarios us WHERE us.id = ${id}`)
}