import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import PlanetList from './components/PlanetList.jsx';
import SinglePlanet from './components/SinglePlanet.jsx';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Home path="/"/>
          <PlanetList path="/planets" />
          <SinglePlanet path="/planets/:planet_id" />
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
