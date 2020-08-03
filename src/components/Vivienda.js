import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function Vivienda(props) {
    return (
        <div className="pt-3 px-3">
            <div className="card text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="card-body">
                    <h5 className="card-title">{props.tipo === 1 ? "Casa" : "Cabaña"}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Precio Diario: ${props.precioDiario}</h6>
                    <p className="card-text">Texto informativo sobre la vivienda</p>
                    <a href="#" className="btn btn-primary">¡Resérvala!</a>
                </div>
            </div>
        </div>
    )
}
