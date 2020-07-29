import React from 'react';
import logo from './logo.svg';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        Esto es una prueba
        <DatePicker dateFormat="dd/MM/yyyy" minDate={new Date()}/>
        <input className="form-check-input" type="radio" name="busquedaPor" id="searchBy3" />
      </div>

    </div>
  );
}

export default App;
