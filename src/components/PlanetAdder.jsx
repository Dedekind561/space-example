import React, { Component } from 'react';
import * as api from '../api';

class PlanetAdder extends Component {
  state = {
    name: '',
    funFact: ''
  };
  render() {
    return (
      <div>
        <h1>Add your own planet...</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input value={this.state.name} onChange={this.handleChange} type="text" id="name" />
          <label htmlFor="fun-fact">Fun fact:</label>
          <input value={this.state.funFact} type="text" id="funFact" onChange={this.handleChange} />
          <button type="submit">Add your planet</button>
        </form>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    api.addNewPlanet(this.state).then(newlyAddedPlanet => {
      this.props.updatePlanets(newlyAddedPlanet);
    });
  };
}

export default PlanetAdder;
