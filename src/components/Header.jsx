import React from 'react';
import { Link } from '@reach/router'

const Header = () => {
  return (
    <header>
      <h1>Space Site</h1>
      <Link to="/">home</Link> | <Link to="/planets">planets</Link>
    </header>
  );
};

export default Header;