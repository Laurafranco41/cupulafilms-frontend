import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>Cúpula Films</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/actores">Actores</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
