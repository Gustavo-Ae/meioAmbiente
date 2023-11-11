import React, { useEffect, useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import "./Modal.css"
import axios from 'axios'
import Cookies from 'js-cookie'

export default function Modal({abrir, setAbrirModal, idUsuario, idProjeto, emissaoReduzida}) {
  
  const userId = Cookies.get("user_id")

  const [informacoesUsuario, SetInformacoesUsuario] = useState([]);

  console.log(informacoesUsuario)

  useEffect(() => {
    axios.get(`http://localhost:5450/user/${userId}`)
    .then(function (resposta) {
      SetInformacoesUsuario(resposta.data)
      console.log(informacoesUsuario);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])

  const handleInvestimento = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(idUsuario)
    console.log(idProjeto)
    console.log(data.valorInvestido)
    console.log(emissaoReduzida)


    if(!Cookies.get("user_id")){
      return alert("Para fazer esse investimento você precisa entrar na sua conta")
    }

    if(data.valorInvestido == ""){
      return alert("Valor é um campo obrigatorio")
    }

    try{
      await axios.post("http://localhost:5450/investimento",{
         idUsuario: parseInt(idUsuario),
         idProjeto: idProjeto,
         valorInvestido: data.valorInvestido,
         emissaoReduzida: emissaoReduzida,
       })
       document.location.reload()
       alert("Investimento feito com sucesso!!")
    }catch(e){
      console.log(e)
      alert("Ocorreu um erro ao fazer o investimento.")
    }

  }

   if(abrir){
    return (
      <div className='pagamento-container'>
         <span className='fecharModal' onClick={setAbrirModal}>
            X
         </span>
          <div className='informacoes-container'>
           <div className='agredecimento-container'>
                <img src='/assets/iconeFolha2.jpg' width={50}/>
                <h2>Obrigado por ajuda a construir um mundo melhor</h2>
            </div>  
           <div>
              <form method='post' onSubmit={handleInvestimento}> 
                <Input
                      title="Email"
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={informacoesUsuario?.email} 
                      onChange={e => SetInformacoesUsuario(e.target.value)}
                  />

                  <Input 
                      title="CPF"
                      type="text"
                      name="numeroDoCPF"
                      placeholder="000.000.000-00"
                      maxLenght={14}
                      value={informacoesUsuario?.cpf}
                      onChange={e => SetInformacoesUsuario(e.target.value)}
                  />

                  <Input
                      title="Telefone"
                      type="text"
                      name="phone"
                      pattern="\d*"
                      maxLenght={11}
                  />
                  
                  <Input
                      title="Endereço"
                      type="text"
                      name="endereco"
                  />

                  <Input
                      title="UF"
                      type="text"
                      name="UF"
                  />
                  
                  <Input 
                      title="Valor"
                      type="text"
                      name="valorInvestido"
                      placeholder="R$00,00"
                  />

                  <Input
                      type="radio"
                      img="/assets/iconeBoleto.png"
                      name="pagamento"
                      value="boleto"
                  />
                    
                  <Button type="submit">Continuar</Button>
              </form>  
           </div>
        </div>
      </div>
    )
   }
   return null
}
