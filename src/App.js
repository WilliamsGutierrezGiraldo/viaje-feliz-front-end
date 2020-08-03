import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Vivienda from './components/Vivienda';
import Navegacion from './components/Navegacion';
import Bienvenida from './components/Bienvenida'
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

    let listaViviendas = [
      {"id": 1 , "tipo": 1, "precioDiario": 285.000, "ruta": "imagen-1"},
      {"id": 2 , "tipo": 2, "precioDiario": 100.000, "ruta": "imagen-2"},
      {"id": 3 , "tipo": 1, "precioDiario": 700.000, "ruta": "imagen-3"},
      {"id": 4 , "tipo": 2, "precioDiario": 850.000, "ruta": "imagen-4"},
      {"id": 5 , "tipo": 2, "precioDiario": 200.000, "ruta": "imagen-5"},
      {"id": 6 , "tipo": 1, "precioDiario": 900.000, "ruta": "imagen-6"}
    ]

    this.setState({
      listaViviendas
    })
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
