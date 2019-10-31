import React, { Component } from 'react';
import './App.css';
import PlanetList from './components/PlanetList';
import { Router } from '@reach/router';
import SinglePlanet from './components/SinglePlanet';

// class App extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="App">
//         <Router>
//           <PlanetList path="/planets" />
//           <SinglePlanet path="/planets/:planet_id" />
//         </Router>
//       </div>
//     );
//   }
// }

class App extends Component {
  state = {};
  render() {
    return <div className="App"></div>;
  }
}

export default App;
