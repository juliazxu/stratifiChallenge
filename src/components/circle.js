import React, { Component } from 'react';

export default class Circle extends Component {
  render() {
    return(
      <div className="circles">
        <div className="small-circle">
          <div className="small-arc"></div>
          <div id="number">2.5</div>
          <div id="number-label">out of 10</div>
        </div>
        <div className="medium-circle-half"></div>
        <div className="medium-circle"></div>
      </div>
    )
  }
}

{/* <div className="medium-circle"></div> */}