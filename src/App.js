import React from 'react';
import logo from './logo.svg';
import DatePicker from 'react-datepicker'
import Vivienda from './components/Vivienda'
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Vivienda />
        <Vivienda />
        {/* <DatePicker dateFormat="dd/MM/yyyy" minDate={new Date()}/> */}
        {/* <input className="form-check-input" type="radio" name="busquedaPor" id="searchBy3" /> */}
      </div>

    </div>
  );
}

export default App;
