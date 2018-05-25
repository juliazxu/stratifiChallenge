import React, { Component } from 'react';
import './../css/box.css';

export default class Bar extends Component {
  render() {
    return(
      <div className="box">
        <span>Your PRISM score can be lowered with <a 
          href="https://www.stratifi.com/options-overlay" target="_blank" 
          rel="noopener noreferrer">StratiFi overlays</a>. Following 
          charts show how StratiFi Overlays can lower the risk of your portfolio with StratiFi 
          recommended overlay blendings.</span>
      </div>
    )
  }
}