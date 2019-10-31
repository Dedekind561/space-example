import React, { Component } from 'react';
import { Link } from '@reach/router';

const PlanetCard = ({ name, au_from_sun, moon_count, planet_id }) => {
  return (
    <section>
      <Link to={`${planet_id}`}>
        <h2>{name}</h2>
      </Link>
      <p>
        Distance from the sun: {au_from_sun}, Moons: {moon_count}
      </p>
    </section>
  );
};

export default PlanetCard;
