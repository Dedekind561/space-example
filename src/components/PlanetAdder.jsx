import React, { Component } from 'react';
import * as api from '../api';

class PlanetAdder extends Component {
  state = {
    name: '',
    au_from_sun: 0,
    type: '',
    img: ''
  };
  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <h3>Add your own planet...</h3>
          <label htmlFor="name">Name: </label>
          <input value={this.state.name} onChange={this.handleChange} type="text" id="name" />
          <label htmlFor="au_from_sun">Distance from the sun:</label>
          <input value={this.state.au_from_sun} type="number" step="0.01" min="0" placeholder="in au" id="au_from_sun" onChange={this.handleChange} />
          <label htmlFor="type">Planet type:</label>
          <select value={this.state.type} id="type" onChange={this.handleChange}>
            <option disabled value="">Select a planet type</option>
            <option value="rock">rocky</option>
            <option value="gas">gaseous</option>
          </select>
          <label htmlFor="img">Image url:</label>
          <input value={this.state.img} type="text" id="img" onChange={this.handleChange} />
          <button type="submit">add planet</button>
        </form>
      </main>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    const { name, au_from_sun, type, img } = this.state
    event.preventDefault();
    api.addNewPlanet({ name, au_from_sun, type, img }).then(planet => {
      this.props.updatePlanets(planet);
    });
  };
}

export default PlanetAdder;
