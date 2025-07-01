import React from 'react';
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
            <button className="btn">LOG IN</button>
            <button className="btn">REGISTRARSE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
