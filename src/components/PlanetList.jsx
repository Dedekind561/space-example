import React, { Component } from 'react';
import * as api from '../api.js';
import PlanetCard from './PlanetCard';
import PlanetAdder from './PlanetAdder';

class PlanetList extends Component {
  state = {
    planets: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchPlanets().then(planets => this.setState({ planets, isLoading: false }));
  }

  render() {
    const { isLoading } = this.state
    return isLoading ? <div>Loading...</div> :
      (
        <main className="Planets">
          <PlanetAdder updatePlanets={this.updatePlanets} />
          <h1>Planets</h1>
          <ul>
            {this.state.planets.map(planet => <PlanetCard key={planet.planet_id} {...planet} />)}
          </ul>
        </main>
      );
  }
  updatePlanets = newPlanet => {
    this.setState(currentState => {
      return { planets: [newPlanet, ...currentState.planets], isLoading: false };
    });
  };
}

export default PlanetList;
