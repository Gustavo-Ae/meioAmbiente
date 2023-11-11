import React from 'react'
import "./CardCertificado.css"

export default function CardCertificado(prop) {

   const {dataemissao, emissaoreduzida, nome, imagem_url} = prop.data

   const data = new Date(dataemissao);

   const dia = String(data.getDate()).padStart(2, '0');
   const mes = String(data.getMonth() + 1).padStart(2, '0');
   const ano = data.getFullYear();
 
   const dataFormatada = `${dia}/${mes}/${ano}`;

  return (
    <div className='item_certificado'>
         <img src={imagem_url} alt='emogiTriste' width={350} height={200}/>
         <div className='item_certificado_descricao'>
            <p>Nome do Projeto: {nome}</p>
            <p>Emissão Reduzida: {emissaoreduzida}</p>
            <p>Data Emissão :{dataFormatada}</p>
         </div>
    </div>
  )
}
