import React from 'react'
import { Link } from 'react-router-dom'

export default function Navegacion() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#"></a>
                <Link className="navbar-brand" to="/">Viaje Feliz</Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/viviendas">Viviendas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registro">Registro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/consultas">Consulte sus reservas</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
