import React, { Component } from 'react';
import './App.css';

class App extends Component {
  

  constructor() {
    super();
    this.updateCheck = this.updateCheck.bind(this);
    this.state = {
      checked: false
    }
  }

  

  render() {
    if (this.state.checked) {
      return (
        <div className="wrapper">
          <label><input type="checkbox" checked={this.state.checked} onChange={this.updateCheck} /> Mostrar información importante</label>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      );  
    } else {
      return (
        <div className="wrapper">
          <label><input type="checkbox" checked={this.state.checked} onChange={this.updateCheck} /> Mostrar información importante</label>
        </div>
      );
    }
    
  }


  updateCheck(evt){
    this.setState({
      checked: evt.target.checked
    });
  }

}

export default App;
