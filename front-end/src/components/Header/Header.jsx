import React, { useEffect, useState } from 'react'
import "./Header.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'

export default function Header() {

  const handleDeslogarConta = () => {
    Cookies.remove("user_id")
    Cookies.remove("authToken")
    window.location.href = "/"
  }

  const [quantidadeCreditoCarbono, setQuantidadeCreditoCarbono] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5450/creditoCarbono/usuario/"+Cookies.get("user_id"))
    .then((resposta) => setQuantidadeCreditoCarbono(resposta.data))
    .catch((e) => console.log(e))
  }, [])

  if(Cookies.get('authToken')){
    return (
      <div className='header-container'>
          <Link to="/">
            <h1 className='logo'>Carbon</h1>
          </Link>
          <div className='button-container'>
              <Link to="/Certificados">
                <div>
                  <div className='container-certificado'>
                    <img src='/assets/certificado.png' alt='certificado' width={80} height={80} />
                    <span className='quantidadeCertificado'>{quantidadeCreditoCarbono}</span>
                  </div>
                </div>
              </Link>
              <Button onClick={handleDeslogarConta}>Sair</Button>
          </div>
      </div>
    )
  }else{
    return (
      <div className='header-container'>
          <Link to="/">
            <h1 className='logo'>Carbon</h1>
          </Link>
          <div className='button-container'>
              <Button>
                 <Link to="/Login">Login</Link>
              </Button>
          </div>
      </div>
    )
  }

}
