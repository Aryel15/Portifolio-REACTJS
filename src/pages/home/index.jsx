import './style.css';
import { Menu } from '../../components/menu';
import { Posts } from '../../components/posts';
import { useState } from 'react';
import Videos from '../../components/videos';
import Sites from '../../components/sites';

export function Home() {
    const [mostraPost, setmostrarPost] = useState(false)
    const mostraroPost = () => {
        setmostrarSite(false)
        setmostrarVideo(false)
        setmostrarPost(!mostraPost)
    }
    const [mostraVideo, setmostrarVideo] = useState(false)
    const mostraroVideo = () => {
        setmostrarSite(false)
        setmostrarPost(false)
        setmostrarVideo(!mostraVideo)
    }
    const [mostraSite, setmostrarSite] = useState(false)
    let mostraroSite = () => {
        setmostrarPost(false)
        setmostrarVideo(false)
        setmostrarSite(!mostraSite)
    }
    
    return (
        <>
            <main className="title">
                <Menu />
                <h1 className="typedtext">Desenvolvimento Front-End</h1>
                <a href="#footer" className="neon-btn">Entre em contato!</a><br/>
                <a href="#quemsou" className="seta"><i className="fa-solid fa-chevron-down"></i></a>
            </main>
            <section className="quemsou" id="quemsou">
                <div className="text">
                    <hr/>
                        <h2>Quem sou</h2>
                        <p>Meu nome é Aryel Anne, tenho 19 anos e moro na Zona leste de São Paulo. Me formei no ensino médio e técnico em Comunicação Visual na ETEC Tiquatira, e fiz um curso de programação front-end na escola “Start profissões e idiomas”. Atualmente estou cursando o quarto semestre de Desenvolvimento de Software Multiplataforma na Fatec Zona Leste.
                        <br/>
                        Tenho conhecimento em ferramentas de criação e edição de imagens, e nas linguagens de programação e marcação HTML, CSS, JAVASCRIPT, JAVA, REACTJS e NODEJS.
Busco constantemente melhorar minhas habilidades e evoluir como profissional, sempre procuro aprender coisas novas e me dedico totalmente em todos os meus projetos.</p>
                </div>
                <img src='/imgs/eu.jpg' alt=""/>
            </section>
            <section id="skills" className="skills">
                <hr/>
                    <h2>Skills</h2>
                    <div className="skill">
                        <i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3-alt"></i>
                        <i className="fa-brands fa-square-js"></i>
                        <i className="fa-brands fa-bootstrap"></i>
                        <i className="fa-brands fa-java"></i>
                        <i className="fa-brands fa-node"></i>
                        <i className="fa-brands fa-react"></i>
                    </div>
            </section>
            <section className="projetos" id="projetos">
                <hr/>
                    <h2>Projetos</h2>
                    <div className="cards">
                            <div className="card" onClick={mostraroPost}>
                                <i className="fa-regular fa-image"></i>
                                <a href="javascript:void(0)">
                                    <button type="button" className="btn btn-primary">Posts</button>
                                </a>
                            </div>
                            <div className="card" onClick={mostraroSite}>
                                <i className="fa-solid fa-laptop-code"></i>
                                <a href="javascript:void(0)">
                                    <button type="button" className="btn btn-primary">Sites</button>
                                </a>
                            </div>
                            <div className="card" onClick={mostraroVideo}>
                                <i className="fa-solid fa-clapperboard"></i>
                                <a className="video" href="javascript:void(0)">
                                    <button type="button" className="btn btn-primary">Videos</button>
                                </a>
                            </div>
                        <br />
                    </div>
                    {mostraPost ? <Posts /> : null}
                    {mostraSite ? <Sites /> : null}
                    {mostraVideo ? <Videos /> : null}
            </section>
            <section className="curriculo" id="curriculo">
                <hr/>
                    <h2>Currículo</h2>
                    <a href="https://drive.google.com/file/d/1UdWGeHot0J_Wq05k_5EX_OVfrwy9xowN/view?usp=drive_link" 
                    className="curriculo-btn" target='_blank'>Currículo</a><br/>
            </section>
            <div className="up">
                <a href="#"><i className="fa-solid fa-circle-chevron-up"></i></a>
            </div>
            <footer id="footer">
                <div className="links">
                    <a className="nav-link" href="https://instagram.com/aryel.anne"><i className="fa-brands fa-instagram"></i></a>
                    <a className="nav-link" href="https://api.whatsapp.com/send/?phone=5511951926732&text&app_absent=0"><i className="fa-brands fa-whatsapp"></i></a>
                    <a className="nav-link" href="https://www.linkedin.com/in/aryel-anne-louise-de-souza-gabriel-91449a231/"><i className="fa-brands fa-linkedin"></i></a>
                    <a className="nav-link" href="https://github.com/Aryel15"><i className="fa-brands fa-github"></i></a>
                </div>
                <p>Todos os Direitos Reservados © 2022. Desenvolvido por Aryel Anne</p>
            </footer>
        </>
    );
}
