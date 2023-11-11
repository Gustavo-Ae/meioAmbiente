

import caapi  from "/assets/projetos/Caapi.webp"
import evergreen from "/assets/projetos/Evergreen.webp"
import fortaleza from "/assets/projetos/Fortaleza.webp"
import hiwi from "/assets/projetos/Hiwi.webp"
import ipoa from "/assets/projetos/Ipoa.webp"
import itauba from "/assets/projetos/Itauba.webp"

export const PROJETOS = [
    {
        id : 1,
        nome : "Caapi",
        descricao : "O projeto CAAPII REDD+ está localizado no estado do Pará, nas cidades de Paragominas, Ipixuna do Pará e Tomé-Açu, e tem como objetivo prevenir o desmatamento de 33.766 hectares de Floresta Amazônica.",
        localizacao : "Pará", //Estado
        areaPreservada_hectare : 35000,
        dataDeInicio : "25/07/2019",
        duracao_ano: 30,
        categoria : "REDD+",
        imagem: caapi
    },
    {
        id : 2,
        nome : "Evergreen",
        descricao : "O projeto Evergreen REDD+ protege florestas localizadas em uma das regiões com maior índice de desmatamento do Bioma Amazônia: o município de Apuí.",
        localizacao : "Amazonas",
        areaPreservada_hectare : 130554,
        dataDeInicio : "25/11/2020",
        duracao_ano: 30,
        categoria : "REDD+",
        imagem: evergreen
    },
    {
        id : 3,
        nome : "Fortaleza Ituxi",
        descricao : "O projeto REDD+ Fortaleza Ituxi protege florestas localizadas em uma das regiões com maior índice de desmatamento do Bioma Amazônia: o município de Lábrea.",
        localizacao : "Amazonas",
        areaPreservada_hectare : 46592,
        dataDeInicio : "15/12/2013",
        duracao_ano: 30,
        categoria : "REDD+",
        imagem: fortaleza
    },
    {
        id : 4,
        nome : "Hiwi",
        descricao : "O projeto Hiwi REDD+ é um consórcio de quatro propriedades rurais que protege mais de 20 mil hectares de floresta tropical no município de Bujari, no Acre.",
        localizacao : "Acre",
        areaPreservada_hectare : 20505,
        dataDeInicio : "31/08/2019",
        duracao_ano: 30,
        categoria : "REDD+",
        imagem: hiwi
    },
    {
        id : 5,
        nome : "Ipoá",
        descricao : "O Projeto IPOÁ REDD+, localizado no município de Novo Aripuanã no Amazonas, é dividido em AUD (desmatamento não planejado evitado) e APD (desmatamento planejado evitado) e tem como objetivo proteger uma parcela da área da floresta amazônica para reduzir as emissões de CO2 e conservar a biodiversidade.",
        localizacao : "Amazonas",
        areaPreservada_hectare : 17386,
        dataDeInicio : "17/03/2022",
        duracao_ano: 30,
        categoria : "REDD+",
        imagem: ipoa
    },
    {
        id : 6,
        nome : "Itaúba",
        descricao : "O projeto Itaúba REDD+ visa proteger florestas localizadas em uma das regiões com maior tendência de desmatamento do bioma Amazônia, nos municípios de Itaúba e Marcelândia, no Mato Grosso.",
        localizacao : "Mato Grosso",
        areaPreservada_hectare : 14400,
        dataDeInicio : "14/12/2021",
        duracao_ano: 30,
        categoria : "REDD+",
        imagem: itauba
    }, 
]