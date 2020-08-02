import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Vivienda from './components/Vivienda';
import Navegacion from './components/Navegacion';
import {BrowserRouter as Router}  from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { Route } from 'react-router-dom';
import Viviendas from './components/Viviendas';


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
            <Navegacion />
            <Route path="/viviendas" component={Viviendas} />
        </Router>
      </div>
    )
  }
}
