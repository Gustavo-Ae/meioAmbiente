require("dotenv").config();

const express = require("express");

const userData = require("../data/usuarioData")

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const router = express.Router();

router.route("/cadastro").post(async (req, res) => {
    const signUpData = req.body;
  
    const { email, senha } = signUpData;
  
    if (!signUpData) {
      return res.status(400).json({
        message:
          "Alguns dados necessários para criação do usuário não foram fornecidos.",
      });
    } else if (signUpData.senha.length < 6) {
      return res
        .status(400)
        .json({ message: "A senha não pode ter menos de 6 caracteres." });
    }
  
    try {
      const hashSenha = await bcrypt.hash(senha, 10);
      const user = await userData
        .criarUsuario(signUpData, hashSenha)
        .then((user) => {
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign({ id: user.id, email }, jwtSecret, {
            expiresIn: maxAge,
          });
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000,
          });
        });
      res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (e) {
      res.status(422).json({
        message: "Ocorreu um erro ao registrar.",
        Erro: e.message,
      });
    }
  });


router.route("/login").post(async(req,res) => {

  const { email, senha } = req.body;

  try{
    const validatedUserData = await userData.getUsuarioPeloEmail(email);

    if(validatedUserData){
      bcrypt.compare(senha, validatedUserData.senha)
      .then((result) => {
        if(result){
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign({id: validatedUserData.id, email}, jwtSecret, {
            expiresIn: maxAge,
          });
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000,
          });
          res.cookie("user-id", validatedUserData.id,{
            httpOnly: true,
            maxAge: maxAge * 1000,
          })
          res.status(201).json({
            message: "Usuário logado com sucesso",
            user_id: validatedUserData.id,
            loginToken: token
          });
        }else{
          res.status(400).json({ message: "Fazer o Login não foi possivel"})
        }
      })
    }
  }catch(e){
    res.status(400).json({
      message: "Ocorreu um erro",
      error: e.message
    });
  }
});

module.exports = router;