import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./TelaProjeto.css"
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Cookies from 'js-cookie';

export default function TelaProjeto() {

  const params = useParams();

  const [projeto, setProjeto] = useState([])

  const [abrirModal, setAbrirModal] = useState(false);

  console.log(params)

  console.log("PORJETO")
  console.log(projeto)

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`http://localhost:5450/projeto/${params.id}`)
      .then(async (response) => {
        setProjeto(response.data[0])
        console.log(projeto)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])


  let localizacao = projeto.idlocalizacao

  if(localizacao == 1){
    localizacao = "Pará"
  }else if(localizacao == 2){
      localizacao = "Amazonas"
  }else if(localizacao == 3){
      localizacao = "Acre"
  }else{
      localizacao = "Mato Grosso"
  }

  const data = new Date(projeto.datadeinicio);

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;

  return (
    <div className='telaProjeto-container'>
        <img src={projeto?.imagem_url} className='imagem-telaProjeto' />
        <div className='telaProjeto-titulo'> 
           <p>Projeto</p>
           <h1>{projeto.nome}</h1>
        </div>
        <div className='informacoes-projeto-container'>
            <div className='informacoes-projeto-item'> 
                  <img src='/assets/iconeFolha2.jpg' alt='folha' width={30} height={30}/>
                  <span>Categoria</span>
                  <span>{projeto.categoria}</span>
            </div>
            <div className='informacoes-projeto-item'>
                  <img src='/assets/icone-mapa.png' alt='folha' width={30} height={30}/>
                  <span>Localização</span>
                  <span>{localizacao}</span>
            </div>
            <div className='informacoes-projeto-item'>
                <img src='/assets/iconeAreaPreservada.png' alt='folha' width={30} height={30}/>
                <span>Área Preservada(ha)</span>
                <span>{projeto.areapreservada_hectare}</span>
            </div>
            <div className='informacoes-projeto-item'>
                <img src='/assets/iconeCalendario.png' alt='folha' width={30} height={30}/>
                <span>Data de Inicio</span>
                <span>{dataFormatada}</span>
            </div>
            <div className='informacoes-projeto-item'>
                <img src='/assets/relogio.png' alt='folha' width={30} height={30}/>
                <span>Duração</span>
                <span>{projeto.duracao_ano} anos</span>
            </div>
        </div>
        <div className='informacoes-projeto-container_2'>
            <div className='informacoes-projeto-container_descricao'>
               <div>
                 <p>{projeto.descricao}</p> 
               </div>
            </div>
            <div className='informacoes-projeto-container_2--botao'>
              <Button onClick={() => setAbrirModal(true)}>Ajudar</Button>
            </div>
        </div>
        <Modal 
          abrir={abrirModal} 
          setAbrirModal={() => setAbrirModal(false)}
          idUsuario={Cookies.get("user_id")} 
          idProjeto={projeto.id}
          emissaoReduzida={projeto.emissaoreduzida} 
        />
    </div>
  )
}
