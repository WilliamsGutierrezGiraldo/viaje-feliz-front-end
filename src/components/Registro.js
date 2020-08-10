import React, { Component } from 'react'

export default class Registro extends Component {

    state = {
        documentoIdentificacion: '',
        nacionalidad: '',
        nombres: '',
        apellidos: '',
        direccion: '',
        telefonos: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    limpiarFormulario = () => {
        this.setState({
            documentoIdentificacion: '',
            nacionalidad: '',
            nombres: '',
            apellidos: '',
            direccion: '',
            telefonos: '',
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let url = `http://localhost:8080/personas/guardarPersona`;

        const user = {
            documentoIdentificacion: this.state.documentoIdentificacion,
            nacionalidad: this.state.nacionalidad,
            nombres: this.state.nombres,
            apellidos: this.state.apellidos,
            direccion: this.state.direccion,
            telefonos: this.state.telefonos
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {

            if (response === 1) {
                this.limpiarFormulario();
                alert("Usuario creado satisfactoriamente...")
            } else {
                alert("No se ha podido crear el usuario, intente nuevamente")
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
                        <label htmlFor="documentoIdentificacion" className="col-md-2 col-form-label font-weight-bold">
                            Nacionalidad:
                        </label>
                        <div className="col-md-2">
                            <input id="nacionalidad" name="nacionalidad" type="text" className="form-control"
                                value={this.state.nacionalidad} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-md-center">
                        <label htmlFor="nombres" className="col-md-2 col-form-label font-weight-bold">
                            Nombres:
                        </label>
                        <div className="col-md-2">
                            <input id="nombres" name="nombres" type="text" className="form-control"
                                value={this.state.nombres} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-md-center">
                        <label htmlFor="nombres" className="col-md-2 col-form-label font-weight-bold">
                            Apellidos:
                        </label>
                        <div className="col-md-2">
                            <input id="apellidos" name="apellidos" type="text" className="form-control"
                                value={this.state.apellidos} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-md-center">
                        <label htmlFor="nombres" className="col-md-2 col-form-label font-weight-bold">
                            Direccion:
                        </label>
                        <div className="col-md-2">
                            <input id="direccion" name="direccion" type="text" className="form-control"
                                value={this.state.direccion} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-md-center">
                        <label htmlFor="nombres" className="col-md-2 col-form-label font-weight-bold">
                            Teléfonos:
                        </label>
                        <div className="col-md-2">
                            <input id="telefonos" name="telefonos" type="text" className="form-control"
                                value={this.state.telefonos} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    <hr/>

                    <div className="row justify-content-md-center">
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-success text-uppercase font-weight-bold">Registrarme</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}
