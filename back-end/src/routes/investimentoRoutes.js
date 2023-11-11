const express = require('express')

const investimentoData = require("../data/investimentoData")

const creditoCarbono = require("../data/creditoCarbonoData")

const router = express.Router();

router.route("/investimento").post(async (req,res) => {
    const {idUsuario, idProjeto, valorInvestido, emissaoReduzida } = req.body
    try{
         await investimentoData.criarInvestimento(idUsuario, idProjeto, valorInvestido);
         await creditoCarbono.criarCreditoCarbono(idUsuario, idProjeto, emissaoReduzida);
         res.status(201);
    }catch(e){
        res.status(404).json({
            message: "Ocorreu um erro para fazer o investimento",
            Error: e.message
        })
    }
})

module.exports = router;
