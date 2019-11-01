import React, { Component } from 'react';
import * as api from '../api';

class SinglePlanet extends Component {
  state = {
    planet: {},
    isLoading: true
  };

  componentDidMount() {
    api.fetchSinglePlanet(this.props.planet_id).then(planet => {
      this.setState({ planet, isLoading: false });
    });
  }
  render() {
    const { fun_fact, name, img, au_from_sun, mean_diameter_miles, mean_temp_c, moon_count, type } = this.state.planet;
    const { isLoading } = this.state;
    return !isLoading ? (
      <main className="SinglePlanet">
        <h1>{name} Fact Page</h1>
        <p>Planet type: {type}</p>
        <p>Distance from the sun: {au_from_sun} au</p>
        <p>Number of moons: {moon_count || 0}</p>
        <p>Diameter: {mean_diameter_miles} miles</p>
        <p>Temperature: {mean_temp_c} ºC</p>
        <p>{fun_fact}</p>
        <img
          style={{
            width: '35vh',
            height: '35vh'
          }}
          src={img}
          alt="planet"
        />
      </main>
    ) : <div>Loading...</div>;
  }
}

export default SinglePlanet;
