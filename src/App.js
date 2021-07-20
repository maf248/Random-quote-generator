import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteBox from './Components/Quote-box';



function App() {
  return (
<div id="wrapper" className="App">
    <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>Random Ecology Quote Generator</h1>
    </div>
    
    <QuoteBox quote="Connecting..." author="Please wait." />
    <div className="footer">by <a href="https://codepen.io/maf248/">MaF!</a></div>
</div>
  );
}

export default App;