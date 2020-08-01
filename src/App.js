import React from 'react';
import logo from './logo.svg';
import DatePicker from 'react-datepicker'
import Vivienda from './components/Vivienda'
import Navegacion from './components/Navegacion'
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  return (
    /* <div classNameName="pt-5 px-5"> */
    <div className="App">
      <Navegacion />
      <div className="row">
        <div className="col-sm-6">
          <Vivienda precioDiario={250.000} tipo={1}/>
        </div>
        <div className="col-sm-6">
          <Vivienda precioDiario={125.000} tipo={1}/>
        </div>
        <div className="col-sm-6">
          <Vivienda precioDiario={380.000} tipo={2}/>
        </div>
        <div className="col-sm-6">
          <Vivienda precioDiario={500.000} tipo={1}/>
        </div>
        <div className="col-sm-6">
          <Vivienda precioDiario={700.000} tipo={2}/>
        </div>
        {/* <DatePicker dateFormat="dd/MM/yyyy" minDate={new Date()}/> */}
        {/* <input classNameName="form-check-input" type="radio" name="busquedaPor" id="searchBy3" /> */}
      </div>

    </div>
  );
}

export default App;
