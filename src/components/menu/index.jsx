import './style.css';

export function Menu() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className='logo' src='/imgs/logo-aryelanne.svg' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#quemsou">Quem sou</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projetos">Projetos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://api.whatsapp.com/send/?phone=5511951926732&text&app_absent=0"><i className="fa-brands fa-whatsapp"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/aryel-anne-louise-de-souza-gabriel-91449a231/"><i className="fa-brands fa-linkedin"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/Aryel15"><i className="fa-brands fa-github"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}