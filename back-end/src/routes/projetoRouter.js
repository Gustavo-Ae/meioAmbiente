const express = require('express')

const router = express.Router();

const projetoData = require("../data/projetoData");

router.route("/projetos")
    .get(async(_, res) => {
        try{
            const projetos = await projetoData.getTodosOsProjetos();
            res.status(200).json(projetos)
        }catch(e){
            res.status(404).json({
                message: "Ocorreu um erro ao buscar todos os projetos",
                Erro: e.message
            })
        }
    })


router.route("/projeto/:id")
    .get(async(req, res) => {
        const projetoId = req.params.id
        try{
            const projeto = await projetoData.getProjetoPeloId(projetoId);
            res.status(200).json(projeto)
        }catch(e){
            res.status(404).json({
                message:`Ocorreu um erro ao buscar o projeto com o id = ${projetoId}`,
                Erro: e.message
            })
        }
    })

module.exports = router;
