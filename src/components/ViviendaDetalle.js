import React, { Component } from 'react'

class ViviendaDetalle extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {id, imagenes, precioDiario, tipo} = this.props.informacion;

        return (
            <div>
                <h1>Este es el componente detallado de vivienda:{imagenes[0]}</h1>
            </div>
        )
    }
}

export default ViviendaDetalle
