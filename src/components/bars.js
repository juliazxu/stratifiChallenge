import React, { Component } from 'react';
import './../css/bars.css';
import Bar from './bar';

export default class Bars extends Component {
  render() {
    return(
      <div>
        <div className="bar-wrapper">
          <Bar proportion='100' />
          <div className="bar-label">Volatility</div>
        </div>
        <div className="bar-wrapper">
          <Bar proportion='72' />
          <div className="bar-label">Correlation Risk</div>
        </div>
        <div className="bar-wrapper">
          <Bar proportion='82' />
          <div className="bar-label">Tail Event</div>
        </div>
        <div className="bar-wrapper">
          <Bar proportion='90' />
          <div className="bar-label">Concentrated Stock</div>
        </div>
      </div>
    )
  }
}