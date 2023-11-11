import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import "./Certificados.css"
import CardCertificado from '../../components/CardCertificado/CardCertificado'

export default function Certificados() {

    const [certificados, setCertificados] = useState([]);

    console.log("CERTIFICADOS")
    console.log(certificados)

    useEffect(() => {
        axios.get("http://localhost:5450/certificados/usuario/"+Cookies.get("user_id"))
        .then((resposta) => setCertificados(resposta.data))
        .catch((e) => console.log(e))
    }, [])

    if(certificados.length == 0){
        return(
            <div className='container_aviso'>
                Você não tem certificado de credito de carbono
                <img src='/assets/icone-emogiTriste.png' alt='emogiTriste' width={80} height={40}/>
            </div>
        )
    }else{
        return (
            <div className='container_certificado'>
                {certificados.map((certificado,posicao) => (
                    <CardCertificado
                       key={posicao}
                       data={certificado}
                    />
                ))}
            </div>
          )
    }
}
