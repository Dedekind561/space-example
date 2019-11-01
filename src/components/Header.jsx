import React from 'react';
import { Link } from '@reach/router'

const Header = () => {
  return (
    <header className="Header">
      <h1>NC Space</h1>
      <Link to="/">home</Link> | <Link to="/planets">planets</Link>
    </header>
  );
};

export default Header;