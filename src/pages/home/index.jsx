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
                <h1 className="typedtext">Desenvolvedora FullStack</h1>
                <a href="#footer" className="neon-btn">Entre em contato!</a><br/>
                <a href="#quemsou" className="seta"><i className="fa-solid fa-chevron-down"></i></a>
            </main>
            <section className="quemsou" id="quemsou">
                <div className="text">
                    <hr/>
                        <h2>Quem sou</h2>
                        <p>Meu nome é Aryel Anne, tenho 19 anos e moro na Zona leste de São Paulo. Me formei no ensino médio e técnico em Comunicação Visual na ETEC Tiquatira, e fiz um curso de programação front-end na escola “Start profissões e idiomas”. Atualmente estou cursando o quinto semestre de Desenvolvimento de Software Multiplataforma na Fatec Zona Leste.
                        <br/>
                        Tenho conhecimento em ferramentas de criação e edição de imagens, e nas linguagens de programação e marcação HTML, CSS, JAVASCRIPT, JAVA, REACTJS, VUEJS, REACT NATIVE e NODEJS.
Busco constantemente melhorar minhas habilidades e evoluir como profissional, sempre procuro aprender coisas novas e me dedico totalmente em todos os meus projetos.</p>
                </div>
                <img src='/imgs/eu.jpg' alt=""/>
            </section>
            <section id="skills" className="skills">
                <hr/>
                    <h2>Skills</h2>
                    <div className="skill">
                        <i className="fa-brands fa-html5" title='HTML'><span>HTML</span></i>
                        <i className="fa-brands fa-css3-alt" title='CSS'><span>CSS</span></i>
                        <i className="fa-brands fa-square-js" title='Javascript'><span>Javascript</span></i>
                        <i className="fa-brands fa-java" title='JAVA'><span>JAVA</span></i>
                        <i className="fa-brands fa-node-js" title='Node JS'><span>Node JS</span></i>
                        <i className="fa-brands fa-react" title='React JS'><span>React JS</span></i>
                        <i class="fa-brands fa-vuejs" title='Vue JS'><span>Vue JS</span></i>
                        <i className="fa-brands fa-react react-native" title='React Native'><span>React Native</span></i>
                        <i class="fa-brands fa-figma" title='Figma'><span>Figma</span></i>
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
                    <a href="https://drive.google.com/file/d/1RWkCRFtn2x6QLiemDLax8gY86MoGTjAD/view?usp=sharing" 
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
