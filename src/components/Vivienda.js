import React from 'react'
import { Link } from 'react-router-dom';

export default function Vivienda(props) {

    const {id, imagenes, precioMinimo, tipo} = props.informacion;

    return (
        <div className="pt-3 px-3">
            <div className="card text-center">
                <img src={`./imagenes/${imagenes[0]}.jpg`} width="629" height="350"/>
                <div className="card-body">
                    <h5 className="card-title">{tipo === 1 ? "Casa" : "Cabaña"}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Precio Diario: ${precioMinimo}</h6>
                    <hr/>
                    <Link to={`/viviendadetalle/${id}`} className="btn btn-primary">¡Resérvala!</Link>
                </div>
            </div>
        </div>
    )
}
