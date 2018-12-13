import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
//import 'vendor/fontawesome-free/css/all.min.css'
import Navbar from './landingPageComponents/Navbar.js'
import About from './landingPageComponents/About.js'
import Description from './landingPageComponents/Description.js'
import Services from './Services.js'
import Reviews from './landingPageComponents/Reviews.js'
import Contact from './landingPageComponents/Contact.js'

import './Main.css'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div><Navbar /></div>
          <div><About /></div>
          <div><Description /></div>
          <div><Services /></div>
          <div><Reviews /></div> 
          <div><Contact /></div>
        </div>
    );
  }
}

export default App;
