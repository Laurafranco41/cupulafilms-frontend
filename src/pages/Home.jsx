import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import './Home.css';

const Home = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="content">
          <h1>Cúpula Films</h1>
          <p>
            Somos una productora audiovisual donde hacemos realidad tus producciones
            audiovisuales, ubicada en Manizales.
          </p>
          <p>Haz tus ideas realidad</p>
          <div className="buttons">
            <Link to="/login">
              <button className="btn">LOG IN</button>
            </Link>
            <Link to="/registro">
              <button className="btn">REGISTRARSE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
