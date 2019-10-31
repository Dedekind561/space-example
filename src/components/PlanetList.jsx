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
    api.fetchPlanets().then(planets => this.setState({ planets }));
  }

  render() {
    return (
      <div>
        <PlanetAdder updatePlanets={this.updatePlanets} />
        {this.state.planets.map((planet, index) => {
          return <PlanetCard key={planet.planet_id} {...planet} />;
        })}
      </div>
    );
  }
  updatePlanets = newlyAddedPlanet => {
    this.setState(currentState => {
      return { planets: [newlyAddedPlanet, ...currentState.planets] };
    });
  };
}

export default PlanetList;
