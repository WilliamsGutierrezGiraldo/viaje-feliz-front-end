import React, { Component } from 'react'

export default class Consultas extends Component {

    state = {
        documentoIdentificacion: '',
        hayDatos: false,
        lista: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    limpiarFormulario = () => {
        this.setState({
            documentoIdentificacion: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let listaResponse = [];

        let url = `http://localhost:8080/reservas/todas?personaId=${this.state.documentoIdentificacion}`;

        fetch(url)
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {

            listaResponse = response;
            console.table(listaResponse);

            if (listaResponse.length > 0) {
                this.setState({hayDatos: true, lista: listaResponse})
            } else {
                this.limpiarFormulario();
                alert("No hay reservas registradas para el documento ingresado...");
            }
            
        });


    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="text-center mt-5">
                        <h3>¡Bienvenido!</h3>
                        <h3>Por favor, ingrese sus datos</h3>
                    </div>
                    <hr/>
                    <div className="row justify-content-md-center">
                        <label htmlFor="documentoIdentificacion" className="col-md-2 col-form-label font-weight-bold">
                                No. documento:
                        </label>
                        <div className="col-md-2">
                            <input id="documentoIdentificacion" name="documentoIdentificacion" type="text" className="form-control"
                                value={this.state.documentoIdentificacion} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-md-center">
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-success text-uppercase font-weight-bold">Consultar</button>
                        </div>
                    </div>
                </form>
                {
                    <>
                    <hr/>
                    <table className="table table-striped">
                        <thead>
                            <th>Id</th>
                            <th>Valor Parcial</th>
                            <th>Valor Total</th>
                            <th>Mascota</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Número Personas</th>
                            <th>Vivienda</th>
                            <th>Documento</th>
                            <th>Estado</th>
                        </thead>
                        <tbody>
                            {this.state.lista.map((reserva, index) => {
                                return (
                                    <tr key={reserva.id}>
                                    <td>{reserva.id}</td>
                                    <td>{reserva.valorParcial}</td>
                                    <td>{reserva.valorTotal}</td>
                                    <td>{reserva.mascota}</td>
                                    <td>{reserva.fechaInicio}</td>
                                    <td>{reserva.fechaFin}</td>
                                    <td>{reserva.numeroPersonas}</td>
                                    <td>{reserva.fkVivienda}</td>
                                    <td>{reserva.fkPersona}</td>
                                    <td>{reserva.estado}</td>
                                    </tr>
                                );
                            })}                      
                        </tbody>

                    </table>
                    </>
                }
            </div>
        )
    }
}
