import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Opcional si deseas estilos

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/actores">Catálogo de Actores</Link></li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
