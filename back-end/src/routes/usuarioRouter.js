const express = require('express')

const userData = require("../data/usuarioData")

const router = express.Router()

router.route("/user/:id")
    .get(async(req, res) => {
        const userId = req.params.id;

        try{
            const user = await userData.getUsuarioPeloId(userId)
            res.status(201).json(user)
        }catch(e){
            res.status(404).json({
                message: "Ocorreu um erro ao buscar o usuário pelo id",
                Error: e.message
            })
        }
    })

module.exports = router;

