import React, { Component } from 'react';
import * as api from '../api.js';
import PlanetCard from './PlanetCard';

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
        {this.state.planets.map((planet, index) => {
          return <PlanetCard key={planet.planet_id} {...planet} />;
        })}
      </div>
    );
  }
}

export default PlanetList;
