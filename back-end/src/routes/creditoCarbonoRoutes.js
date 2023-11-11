const express = require('express')

const creditoCarbono = require("../data/creditoCarbonoData")

const router = express.Router();

router.route("/creditoCarbono/usuario/:id")
    .get(async(req, res) => {
        const userId = req.params.id;

        try{
            const quantidadeCreditoCarbono = await creditoCarbono.obterQuantidadeCreditoCarbono(userId);
            res.status(201).json(quantidadeCreditoCarbono[0].count);
        }catch(e){
            res.status(500).json({
                message: "Ocorreu um erro ao buscar o credito de carbono pelo id do usuario",
                Error: e.message
            });
        }
    })

router.route("/certificados/usuario/:id")
    .get(async(req,res) => {
        const userId = req.params.id;

        try{
            const certificados = await creditoCarbono.obterTodosCreditosCarbono(userId);
            res.status(201).json(certificados);
        }catch(e){
            res.status(500).json({
                message:"Ocorreu um erro ao buscar os certificados de credito de carbono pelo id do usuário",
                Error: e.message
            })
        }
    })    

module.exports = router;