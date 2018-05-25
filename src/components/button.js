import React, { Component } from 'react';
import './../css/button.css';

export default class Button extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Hire me!');
  }

  render() {
    return(
      <button 
        onClick={this.handleClick}
        type="button">
        <span className="button-text">Generate PDF report</span>
      </button>
    )
  }
}