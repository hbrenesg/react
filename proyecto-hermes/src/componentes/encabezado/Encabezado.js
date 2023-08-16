// import logo from "./logo.svg";
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import "./Encabezado.css";
import ArtDescripcionPersonal from "../artDescripcionPersonal/ArtDescripcionPersonal";
import ArtHabilidades from "../artHabilidades/ArtHabilidades";
import ArtExperienciaLaboral from "../artExperienciaLaboral/ArtExperienciaLaboral";
import ArtComentarios from "../artComentarios/ArtComentarios";
import FormularioContacto from "../formularioContacto/FormularioContacto";
import Noticias from "../noticias/Noticias";
import PiePagina from "../piePagina/PiePagina";

export default function Encabezado(props) {
    return (
        <Router>
            <div>
                <div className="div-principal">
                    <img src={props.urlImagenLogo} className="logo-proyecto-react" alt="Imagen Logo"></img>
                    <nav>
                        <ul className="ul-links">
                            <li className="li-link">
                                <Link to="/" className="a-link">HOME</Link>
                            </li>
                            <li className="li-link">
                                <Link to="/about" className="a-link">ABOUT</Link>
                            </li>
                            <li className="li-link">
                                <Link to="/skills" className="a-link">SKILLS</Link>
                            </li>
                            <li className="li-link">
                                <Link to="/experience" className="a-link">EXPERIENCE</Link>
                            </li>
                            <li className="li-link">
                                <Link to="/testimonials" className="a-link">TESTIMONIALS</Link>
                            </li>
                            <li className="li-link">
                                <Link to="/contact" className="a-link">CONTACT</Link>
                            </li>
                            <li className="li-link">
                                <Link to="/news" className="a-link">NEWS</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/">
                        <ArtDescripcionPersonal urlImagenPerfil="./img/imagenPerfil.png"></ArtDescripcionPersonal>
                        <ArtHabilidades></ArtHabilidades>
                        <ArtExperienciaLaboral />
                        <ArtComentarios></ArtComentarios>
                        <FormularioContacto />
                        <Noticias />
                        <PiePagina urlImagenIcono="./img/iconoProyectoReact.png"></PiePagina>
                    </Route>
                    <Route path="/about" >
                        <ArtDescripcionPersonal urlImagenPerfil="./img/imagenPerfil.png" />
                    </Route>
                    <Route path="/skills">
                        <ArtHabilidades />
                    </Route>
                    <Route path="/experience">
                        <ArtExperienciaLaboral />
                    </Route>
                    <Route path="/testimonials">
                        <ArtComentarios />
                    </Route>
                    <Route path="/contact">
                        <FormularioContacto />
                    </Route>
                    <Route path="/news">
                        <Noticias />
                    </Route>
                    <Route path="*">
                        <PaginaNoEncontrada />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function PaginaNoEncontrada() {
    let direccion = useLocation();
    return <div><h2>Página No Encontrada</h2><p>No se encontró la página indicada
        a<code>{direccion.pathname}</code></p></div>;
}