import React, { Component } from 'react';
import leftMenu from './assets/leftMenu.png';
import './index.css';
import Button from './components/button';
import Circle from './components/circle';
import Bars from './components/bars';
import Box from './components/box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={leftMenu} alt="left menu"/>
        <div className="page">
          <span className="header">
            <h1>What We Recommend</h1>
            <Button />
          </span>
          <Box />
          <h2>Portfolio + <a 
            href="https://www.stratifi.com/quantify-portfolio-risk" 
            target="_blank"
            rel="noopener noreferrer">50% Tail Risk, 50% Risk Reduction</a></h2>
          <div className="white-box">
            <Circle />
            <div id="risk-label">Low Risk</div>
            <Bars />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
