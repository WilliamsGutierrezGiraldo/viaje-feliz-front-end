import React, { Component } from 'react'
import DatePicker from "react-datepicker";

class ViviendaDetalle extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        fechaInicial: new Date(),
        fechaInicial: new Date(),
        idVivienda: this.props.informacion.id,
        disponible: false,
        noDocumento: '',
        existePersona: false
    }

    handleChangeFechaInicial = (e) => {
        this.setState({
            fechaInicial: e
        });

    }

    handleChangeFechaFinal = (e) => {
        this.setState({
            fechaFinal: e
        });

    }

    handleChangeNoDocumento = (e) => {
        this.setState({
            noDocumento: e.target.value
        });
    }

    handleSubmitDisponibilidad = (e) => {
        e.preventDefault();

        let listaResponse = [];

        fetch(`http://localhost:8080/reservas/consultarDisponibilidad?idVivienda=${this.state.idVivienda}&fecha=${this.state.fechaInicial}`)
            .then(response => response.json())
            .then(response => {
                listaResponse = response;
                (listaResponse.length > 0 ? alert("Vivienda no disponible para el rango de fechas ingresado"): this.setState({disponible:true}));
            })
            .catch(error => console.log(error))
    }

    handleSubmitConsultarUsuario = (e) => {
        e.preventDefault();

        let listaResponse = [];

        fetch(`http://localhost:8080/personas/personaPorId?id=${this.state.noDocumento}`)
            .then(response => response.json())
            .then(response => {
                listaResponse = response;
                (listaResponse.length > 0 ? this.setState({existePersona: true}) : this.setState({existePersona: false}))

            })
            .catch(error => console.log(error))

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
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    Permite mascotas: {permiteMascotas === 1 ? "Sí" : "No"}
                                </div>
                                <div className="col-sm">
                                    Aire acondicionado: {aireAcondicionado === 1 ? "Sí" : "No"}
                                </div>
                                <div className="col-sm">
                                    Calefacción: {calefaccion === 1 ? "Sí" : "No"}
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    Número de baños: {numeroBanios}
                                </div>
                                <div className="col-sm">
                                    Número de habitaciones: {numeroHabitaciones}
                                </div>
                                <div className="col-sm">
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
                {!this.state.disponible && 
                <form onSubmit={this.handleSubmitDisponibilidad}>
                    <div className="text-center mt-5">
                        <h3>Consulte disponibilidad de la vivienda</h3>
                    </div>
                    <hr/>
                    <div className="row justify-content-md-center">
                        <div className="form-group row">
                            <label htmlFor="fechaInicial" className="col-form-label font-weight-bold">Fecha Inicial:</label>
                            <div className="col-md-2">
                                <DatePicker id="fechaInicial" placeholderText="Fecha Inicial" 
                                    dateFormat="yyyy/MM/dd" minDate={new Date()}
                                    onChange={this.handleChangeFechaInicial}
                                    selected={this.state.fechaInicial}/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="form-group row">
                            <label htmlFor="fechaFinal" className="col-form-label font-weight-bold">Fecha Final:</label>
                            <div className="col-md-2">
                                <DatePicker id="fechaFinal" placeholderText="Fecha Final" 
                                    dateFormat="yyyy/MM/dd" minDate={new Date()}
                                    onChange={this.handleChangeFechaFinal}
                                    selected={this.state.fechaFinal}/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-success text-uppercase font-weight-bold">Consultar</button>
                        </div>
                    </div>
                </form>
                }
                {(this.state.disponible) &&
                    <form onSubmit={this.handleSubmitConsultarUsuario}>
                        <div className="text-center mt-5">
                            <h3>¡Vivienda disponible!</h3>
                        </div>
                        <hr/>
                        <div className="row justify-content-md-center">
                            <label htmlFor="noDocumento" className="col-md-2 col-form-label font-weight-bold">
                                    No. documento:
                            </label>
                            <div className="col-md-2">
                                <input id="noDocumento" name="noDocumento" type="text" className="form-control"
                                    value={this.state.noDocumento} onChange={this.handleChangeNoDocumento} required />
                                <div className="invalid-feedback">Campo Obligatorio</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row justify-content-md-center">
                            <div className="col-md-2">
                                <button type="submit" className="btn btn-success text-uppercase font-weight-bold">Buscar</button>
                            </div>
                        </div>
                    </form>
                }
                {
                    
                }
            </React.Fragment> 
        )
    }
}

export default ViviendaDetalle
