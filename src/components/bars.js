import React, { Component } from 'react';
import './../css/bars.css';

export default class Bars extends Component {
  render() {
    return(
      <div>
        <div className="bar-wrapper">
          <div className="progress">
            <svg>
              <defs>
              <linearGradient id="gradient1">
                <stop className="stop1" offset="0%"/>
                <stop className="stop2" offset="50%"/>
                <stop className="stop3" offset="100%"/>
              </linearGradient>
              </defs>
              <rect className="bg" width="100%" height="100%" rx="4"/>
              <rect className="fill mask-rect-100" width="100%" height="100%" rx="4"/>
            </svg>
          </div>
          <div className="bar-label">Volatility</div>
        </div>
        <div className="bar-wrapper">
          <div className="progress">
            <svg>
              <defs>
              <linearGradient id="gradient1">
                <stop className="stop1" offset="0%"/>
                <stop className="stop2" offset="50%"/>
                <stop className="stop3" offset="100%"/>
              </linearGradient>
              <clipPath id="cut-72">
                <rect x="0" y="0" width="72%" height="100%" />
              </clipPath>
              </defs>
              <rect className="bg" width="100%" height="100%" rx="4"/>
              <g clipPath="url(#cut-72)">
                <rect mask="url(#mask)" className="fill mask-rect-72" width="100%" height="100%" rx="4"/>
              </g>	
            </svg>
          </div>
          <div className="bar-label">Correlation Risk</div>
        </div>
        <div className="bar-wrapper">
          <div className="progress">
            <svg>
              <defs>
              <linearGradient id="gradient1">
                <stop className="stop1" offset="0%"/>
                <stop className="stop2" offset="50%"/>
                <stop className="stop3" offset="100%"/>
              </linearGradient>
              <clipPath id="cut-82">
                <rect x="0" y="0" width="82%" height="100%" />
              </clipPath>
              </defs>
              <rect className="bg" width="100%" height="100%" rx="4"/>
              <g clipPath="url(#cut-82)">
                <rect className="fill mask-rect-82" width="100%" height="100%" rx="4"/>
              </g>	
            </svg>
          </div>
          <div className="bar-label">Tail Event</div>
        </div>
        <div className="bar-wrapper">
          <div className="progress">
            <svg>
              <defs>
              <linearGradient id="gradient1">
                <stop className="stop1" offset="0%"/>
                <stop className="stop2" offset="50%"/>
                <stop className="stop3" offset="100%"/>
              </linearGradient>
              <clipPath id="cut-90">
                <rect x="0" y="0" width="90%" height="100%" />
              </clipPath>
              </defs>
              <rect className="bg" width="100%" height="100%" rx="4"/>
              <g clipPath="url(#cut-90)">
                <rect className="fill mask-rect-90"width="100%" height="100%" rx="4"/>
              </g>	
            </svg>
          </div>
          <div className="bar-label">Concentrated Stock</div>
        </div>
      </div>
    )
  }
}