import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar.js'
import About from './About.js'
import './Main.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Navbar /></div>
        <div><About /></div>
        
      </div>
    );
  }
}

export default App;
