import React, { Component } from 'react';
import leftMenu from './assets/leftMenu.png';
import './index.css';
import Button from './components/button';
import Circle from './components/circle';

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
          <div className="box">
            <span className="box-text">Your PRISM score can be lowered with <a href="https://www.stratifi.com/options-overlay" target="_blank">StratiFi overlays</a>. Following charts show how StratiFi Overlays can lower the risk of your portfolio with StratiFi recommended overlay blendings.</span>
          </div>
          <h2>Portfolio + <a href="https://www.stratifi.com/quantify-portfolio-risk" target="_blank">50% Tail Risk, 50% Risk Reduction</a></h2>
          <div className="white-box">
            <Circle />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
