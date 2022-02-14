import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { createNew } from 'typescript';
import Title from './Title';


function App() {
  return (
    <div className="App">
      
        <Title />
        <img src={logo} className="App-logo" width={200} alt='React Logo'/>
      
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <Title />
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //       Just testing some stuff here.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;


