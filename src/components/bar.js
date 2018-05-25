import React, { Component } from 'react';

export default class Bar extends Component {
  render() {
    return(
      <div className="progress">
        <svg>
          <defs>
          <linearGradient id="gradient1">
            <stop className="stop1" offset="0%"/>
            <stop className="stop2" offset="50%"/>
            <stop className="stop3" offset="100%"/>
          </linearGradient>
          <clipPath id={'cut-' + this.props.proportion}>
            <rect x="0" y="0" width={this.props.proportion + '%'} height="100%" />
          </clipPath>
          </defs>
          <rect className="bg" width="100%" height="100%" rx="4"/>
          <g clipPath={'url(#cut-' + this.props.proportion + ')'}>
            <rect className={'fill mask-rect-' + this.props.proportion} width="100%" height="100%" rx="4"/>
          </g>	
        </svg>
      </div>
    )
  }
}