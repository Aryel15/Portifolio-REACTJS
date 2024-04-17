import React from 'react'
import './style.css'

export default function Sites() {
  const sites = [
    {
      nome:"+Jogos Frontend",
      link:"https://mais-jogos-frontend-react-mxfw.vercel.app/",
      image: '4.png',
      repo: "https://github.com/Mais-Jogos/MaisJogosFrontendReact",
      skills: ['react', 'css3']
    },
    {
      nome:"Socieloo Frontend",
      link:"https://diogolcarvalho.github.io/socieloo/",
      image: '2.png',
      repo: "https://github.com/Aryel15/reactjs_socieloo",
      skills: ['react', 'css3']
    },
    {
      nome:"Aryel Anne Webdesign",
      link:"/",
      image: '5.png',
      repo: "https://github.com/Aryel15/Portifolio-REACTJS",
      skills: ['react', 'css3']
    },
    {
      nome:"Seja Digital para ser lembrado",
      link:"https://sejadigitalparaserlembrado.com.br",
      image: '1.png',
      repo: "",
      skills: ['react', 'css3', 'node-js']
    },
    {
      nome:"Orange Portifolio",
      link:"https://orangeportifolio-front-squad15.vercel.app/",
      image: '9.png',
      repo: "https://github.com/PedroFonseca447/orange-portifolio-squad15",
      skills: ['react', 'css3', 'node-js']
    },
    {
      nome:"Ecommerce Pandanjo",
      link:"https://aryel15.github.io/Teste-Panda-2024/",
      image: '10.png',
      repo: "https://github.com/Aryel15/Teste-Panda-2024",
      skills: ['html5', 'css3', 'javascript']
    },
    {
      nome:"Anime Central",
      link:"https://anime-central-react-js-node-js.vercel.app/",
      image: '12.png',
      repo: "https://github.com/Aryel15/AnimeCentral---ReactJS-NodeJS",
      skills: ['react', 'css3', 'node-js']    
    },
    {
      nome:"To do List",
      link:"https://to-do-list-snowy-kappa.vercel.app/",
      image: '11.png',
      repo: "https://github.com/Aryel15/To-do-List",
      skills: ['vuejs', 'css3', 'google']
    },
    {
      nome:"Arywebdesign",
      link:"https://arywebdesign.netlify.app",
      image: '6.png',
      repo: "",
      skills: ['html5', 'css3', 'javascript']
    },
    {
      nome:"Florescer o livro negro da morte",
      link:"https://florescerolivronegrodamorte.netlify.app",
      image: 'Florescer-o-Livro-Negro-da-Morte.png',
      repo: "https://github.com/Aryel15/Site-Florescer",
      skills: ['hmtl5', 'css3']
    },
    {
      nome:"Melhores Hamburguerias",
      link:"https://aryel15.github.io/Hamburguers-SP/",
      image: '7.png',
      repo: "https://github.com/Aryel15/Hamburguers-SP",
      skills: ['html5', 'css3']
    },
    {
      nome:"FatecZL",
      link:"https://aryel15.github.io/Site-Fatec-Aula-HTML-",
      image: '8.png',
      repo: "https://github.com/Aryel15/Site-Fatec-Aula-HTML-",
      skills: ['html5', 'css3']
    }
  ]
  return (
    <div className='sites'>
      {sites?.map((site, index) => (
        <a href={site?.link} target="_blank" key={index}>
          <img src={`/imgs/sites/${site?.image}`} alt=""/>
          <div className="sites-info">
            {site?.nome}
            <div className="site-skills">
              <div className="skills-icons">
              {
                site?.skills.map((skill) => { return( <i className={`fa-brands fa-${skill}`} title={skill} key={skill}></i>)})
              }
              </div>
              {site?.repo !== "" && <a href={site?.repo} className='site-repo' target="_blank"><i className={`fa-brands fa-github`} title={`Repositório ${site?.nome}`} ></i></a>}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
