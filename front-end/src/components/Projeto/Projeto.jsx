import React from 'react'
import Button from '../Button/Button'
import "./Projeto.css"
import { Link } from 'react-router-dom'


export default function Projeto(prop) {

    const { id, nome, areapreservada_hectare, imagem_url , categoria, idlocalizacao} = prop.data

    // const handleMudarDePagina = () => {
    //     window.location.href = "/projeto/"+id;
    // }

    const link = "/projeto/"+id

    let localizacao = idlocalizacao

    if(localizacao == 1){
        localizacao = "Pará"
    }else if(localizacao == 2){
        localizacao = "Amazonas"
    }else if(localizacao == 3){
        localizacao = "Acre"
    }else{
        localizacao = "Mato Grosso"
    }

return (
    <div className='projeto-container'>
        <div>
            <img src={imagem_url} className='projeto-imagem' />
        </div>
        <div>
            <div>
                <h1>{nome}</h1>
            </div>
            <div className='projeto-descricao'>
                <div className='projeto-descricao-informacao'> 
                    <img src='/assets/iconeFolha2.jpg' alt='folha' width={30} height={30}/>
                    <span>Categoria</span>
                    <span>{categoria}</span>
                </div>
                <div className='projeto-descricao-informacao'>
                    <img src='/assets/icone-mapa.png' alt='folha' width={30} height={30}/>
                    <span>Localização</span>
                    <span>{localizacao}</span>
                </div>
                <div className='projeto-descricao-informacao'>
                <img src='/assets/iconeAreaPreservada.png' alt='folha' width={30} height={30}/>
                    <span>Área Preservada(ha)</span>
                    <span>{areapreservada_hectare}</span>
                </div>
            </div>
        </div>
        <div className='projeto-button'>
            {/* <Button onClick={handleMudarDePagina}>
                Veja Mais
            </Button> */}
            <Link to={"/projeto/"+id}>
                <Button>Veja Mais</Button>
            </Link>
        </div>
    </div>
  )
}
