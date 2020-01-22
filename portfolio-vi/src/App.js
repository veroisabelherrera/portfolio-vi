import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TitleH1 } from './components/H1';


function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <TitleH1>Hola, soy el H1</TitleH1>
    </div>
  );
}

export default App;
