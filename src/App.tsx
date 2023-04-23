import React from 'react';
import logo from './logo.svg';
import './App.css';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PasswordGenerator/>
      </header>
    </div>
  );
}

export default App;
