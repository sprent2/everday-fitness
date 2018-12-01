import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
//import 'vendor/fontawesome-free/css/all.min.css'
import Navbar from './Navbar.js'
import About from './About.js'
import Description from './Description.js'
import Services from './Services.js'
import './Main.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Navbar /></div>
        <div><About /></div>
        <div><Description /></div>
        <div><Services /></div>
        
      </div>
    );
  }
}

export default App;
