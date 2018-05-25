import React, { Component } from 'react';
import leftMenu from './assets/leftMenu.png';
import './index.css';
import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={leftMenu} alt="left menu"/>
        <div className="page">
          <h1>What We Recommend</h1>
          <Button />
        </div>
      </div>
    );
  }
}

export default App;
