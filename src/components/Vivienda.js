import React from 'react'
import logo from '../logo.svg';

export default function Vivienda() {
    return (
        <div className="card text-center">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="card-body">
                <h5 className="card-title">Casa/Cabaña</h5>
                <h6 className="card-subtitle mb-2 text-muted">Precio Diario</h6>
                <p className="card-text">Texto informativo sobre la vivienda</p>
                <a href="#" className="btn btn-primary">¡Reservar!</a>
            </div>
        </div>
    )
}
