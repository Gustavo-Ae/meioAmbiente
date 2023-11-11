import React from 'react'
import BarraLateral from "../../components/BarraLateral/BarraLateral"
import "./Login.css"
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

export default function Login() {

  const handleCriarConta = async(e) =>{
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    console.log("DATA:")
    console.log(data)

    if(data.password.length < 6) return alert('A senha precisa ter mais que 6 caracteres.') 

    axios.defaults.withCredentials = false;

    try{
      axios.post("http://localhost:5450/cadastro", {
        nome: data.name,
        email: data.email,
        cpf: data.cpf,
        senha: data.password
      })
      alert("Usuário criado com sucesso!")
    }catch(e){
      console.log(e);
      alert('Ocorreu um erro ao criar o usuário.')
    }
  }

  const handleLogin = async(e) => {
    e.preventDefault()

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try{
      const resposta = await axios.post("http://localhost:5450/login", {
        email: data.email,
        senha: data.password
      })
      if(!resposta.data.user_id) alert("Email ou senha incorreto!")
      alert("Usuário logado com sucesso!!")
      Cookies.set("user_id", resposta.data.user_id)
      Cookies.set("authToken", resposta.data.loginToken)
      window.location.reload()
    }catch(e){
      alert("Ocorreu um erro ao validar o usuário.")
    }
  }

  if (!Cookies.get('authToken')) {
    return (
      <div className='telaLogin-container'>
          <div className='login-container'>
              <h1>Faça o Login</h1>
  
              <form id='login' method='get' onSubmit={handleLogin}>
                <div className='loginInput-container'>
                  <Input
                      title="Email"
                      type="text"
                      name="email"
                      placeholder="Email"
                  />
  
                  <Input
                      title="Senha"
                      type="password"
                      name="password"
                      placeholder="Senha"
                  />
                </div>
                <Button type="submit">
                  Acessar Conta
                </Button>
              </form>
          </div>
  
          <BarraLateral />
  
          <div className='cadastro-container'>
              <h1>Criar uma Conta</h1>
              <form id='cadastro' method='post' onSubmit={handleCriarConta} >
                <div className='inputCadastro-container'>
                  <Input
                      title="Nome"
                      type="text"
                      name="name"
                      placeholder="Nome"
                    />
  
                  <Input
                    title="Email"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
  
                  <Input
                    title="CPF"
                    type="text"
                    name="cpf"
                    placeholder="CPF"
                  />
  
                  <Input
                      title="Senha"
                      type={"password"}
                      name="password"
                      placeholder="Senha"
                    />
  
                </div>
                <Button type="submit">
                   Criar Conta
                </Button>
              </form>
          </div>
      </div>
    )
  }else{
    return (
      <div className='telaUsuario-container'>
        <div className='telaUsuario-item'>
          <h1>Seja bem-vindo</h1>
          <Button><Link to="/">Voltar à home</Link></Button>
        </div>
      </div>
    )
  }
  
}
