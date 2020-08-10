import React, { Component } from 'react';
import Navegacion from './components/Navegacion';
import Bienvenida from './components/Bienvenida'
import Registro from './components/Registro'
import Consultas from './components/Consultas'
import {BrowserRouter as Router, Switch}  from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { Route } from 'react-router-dom';
import Viviendas from './components/Viviendas';
import ViviendaDetalle from './components/ViviendaDetalle'


export default class App extends Component {

  state = {
    listaViviendas: []
  }

  componentDidMount() {

    fetch('http://localhost:8080/viviendas/todas')
      .then(response => response.json())
      .then(response =>{

        let listaViviendas = [];

        for (let i of response) {
          
          let id = i.id;
          let permiteMascotas = i.permiteMascotas; 
          let aireAcondicionado = i.aireAcondicionado;
          let calefaccion = i.calefaccion;
          let numeroBanios = i.numeroBanios;
          let precioMinimo = i.precioMinimo;
          let numeroHabitaciones = i.numeroHabitaciones;
          let tipo = i.tipo;
          let imagenes = i.rutaImagen.split(" ");
          let numeroPersonas = i.numeroPersonas;

          const obj = {id, permiteMascotas, aireAcondicionado, calefaccion, numeroBanios,
            precioMinimo, numeroHabitaciones, tipo, imagenes, numeroPersonas};

          listaViviendas.push(obj);
        }

        this.setState({
          listaViviendas
        })

      })
      .catch(error => console.log(error))

  }

  render() {
    return (
      <div>
        <Router>
            <Navegacion />
            <Switch>
              <Route exact path="/viviendas">
                <Viviendas viviendas={this.state.listaViviendas}/>
              </Route>
              <Route exact path="/registro">
                <Registro />
              </Route>
              <Route exact path="/consultas">
                <Consultas />
              </Route>
              <Route exact path="/viviendadetalle/:viviendaId" render={(props) => {
                let idVivienda = parseInt(props.location.pathname.replace("/viviendadetalle/",""));
                let informacion = this.state.listaViviendas.filter(vivienda => vivienda.id === idVivienda)[0];
                return(
                  <ViviendaDetalle informacion={informacion} />
                )
              }}/>
              <Route path="/" exact component={Bienvenida} />
            </Switch>
        </Router>
      </div>
    )
  }
}
