import React, { useEffect, useState } from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.css"
import axios from 'axios'
import Projeto from '../../components/Projeto/Projeto'

export default function Home() {

  const [projetos, setProjetos] = useState([])

  useEffect(() => {
      axios.get('http://localhost:5450/projetos')
      .then(function (response) {
        setProjetos(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <>
        <Slider />
        <section className='projetos'>
          <div className='projetos-descricao'>
              <h1 className='titulo-projetos'>Projetos</h1>
              <p>A Carbon desenvolve e monitora uma ampla variedade de projetos de REDD+ na Amazônia, onde nossos créditos de carbono são gerados.</p>
          </div>
          <div className='projetos-container'>
             {projetos.map(projeto => (
                <Projeto data={projeto} key={projeto.id}/>
             ))}
          </div>
        </section>
    </>
  )
}
