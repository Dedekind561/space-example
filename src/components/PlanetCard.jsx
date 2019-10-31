import React from 'react';
import { Link } from '@reach/router';

const PlanetCard = ({ name, au_from_sun, moon_count, planet_id }) => {
  return (
    <li>
      <Link to={`${planet_id}`}>
        <h2>{name}</h2>
      </Link>
      <p>
        Distance from the sun: {au_from_sun} au
      </p>
      <p>
        Moons: {moon_count}
      </p>
    </li>
  );
};

export default PlanetCard;
