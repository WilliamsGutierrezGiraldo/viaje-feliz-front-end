import React, { Component } from 'react'

class ViviendaDetalle extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {id, permiteMascotas, aireAcondicionado, calefaccion, numeroBanios,
            precioMinimo, numeroHabitaciones, tipo, imagenes, numeroPersonas} = this.props.informacion;

        return (
            <React.Fragment>
                <div className="text-center mt-5">
                    <h1>Detalle de la vivienda</h1>
                </div>
                <div className="card text-center mt-5 mp-5">
                    <div className="card-header">
                        <h2>{tipo === 1 ? "Casa" : "Cabaña"}</h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Precio Diario: ${precioMinimo}</h5>
                        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    Permite mascotas: {permiteMascotas === 1 ? "Sí" : "No"}
                                </div>
                                <div class="col-sm">
                                    Aire acondicionado: {aireAcondicionado === 1 ? "Sí" : "No"}
                                </div>
                                <div class="col-sm">
                                    Calefacción: {calefaccion === 1 ? "Sí" : "No"}
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    Número de baños: {numeroBanios}
                                </div>
                                <div class="col-sm">
                                    Número de habitaciones: {numeroHabitaciones}
                                </div>
                                <div class="col-sm">
                                    Número de personas permitidas: {numeroPersonas}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    {
                        imagenes.map(imagen => (
                            <div key={`/imagenes/${imagen}.jpg`}>
                            <img src={`/imagenes/${imagen}.jpg`} width="629" height="350"
                                className="rounded mx-auto d-block" alt="Imagen de inicio"/>
                            <hr/> 
                            </div>
                        ))
                    }
                </div>
            </React.Fragment> 
        )
    }
}

export default ViviendaDetalle
