import React from 'react'
import './style.css'

export default function Sites() {
  const sites = [
    {
      nome:"Seja Digital para ser lembrado",
      link:"https://sejadigitalparaserlembrado.com.br",
    },
    {
      nome:"Socieloo",
      link:"https://diogolcarvalho.github.io/socieloo/"
    },
    {
      nome:"Florescer o livro negro da morte",
      link:"https://florescerolivronegrodamorte.netlify.app",
    },
    {
      nome:"+Jogos",
      link:"https://github.com/Mais-Jogos/MaisJogosFrontendReact",
    },
    {
      nome:"Aryel Anne Webdesign",
      link:"/",
    },
    {
      nome:"Arywebdesign",
      link:"https://arywebdesign.netlify.app",
    },
    {
      nome:"Melhores Hamburguerias",
      link:"https://aryel15.github.io/Hamburguers-SP/",
    },
    {
      nome:"FatecZL",
      link:"https://aryel15.github.io/Site-Fatec-Aula-HTML-",
    }
  ]
  return (
    <div className='sites'>
      {sites?.map((site, index) => (
        <a href={site?.link} target="_blank">
          <img src={`/imgs/sites/${index+1}.png`} alt=""/>
          {site?.nome}
        </a>
      ))}
    </div>
  )
}
