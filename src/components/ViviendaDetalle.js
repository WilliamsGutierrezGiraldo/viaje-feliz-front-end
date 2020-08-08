import React, { Component } from 'react'

class ViviendaDetalle extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {id, imagenes, precioDiario, tipo} = this.props.informacion;

        return (
            <div className="card text-center mt-5">
                {
                    imagenes.map(imagen => (
                        <>
                        <img src={`/imagenes/${imagen}.jpg`} width="629" height="350"
                            className="rounded mx-auto d-block" alt="Imagen de inicio"/>
                        <hr/> 
                        </>
                    ))
                }
            </div>
        )
    }
}

export default ViviendaDetalle
