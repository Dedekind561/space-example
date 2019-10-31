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
    const { fun_fact, name, img } = this.state.planet;
    return name ? (
      <div>
        <h1>{name}</h1>
        <p>{fun_fact}</p>
        <img
          style={{
            width: '50%',
            height: '50%'
          }}
          src={img}
          alt="planet"
        />
      </div>
    ) : null;
  }
}

export default SinglePlanet;
