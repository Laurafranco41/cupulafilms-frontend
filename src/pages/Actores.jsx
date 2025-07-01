import React from 'react';
import ActorCard from '../components/ActorCard';

const actores = [
  {
    nombre: 'Laura Jiménez',
    edad: 24,
    rol: 'Actriz de voz',
    foto: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'Carlos Torres',
    edad: 30,
    rol: 'Actor de cine',
    foto: 'https://via.placeholder.com/150'
  }
];

const Actores = () => {
  return (
    <div>
      <h2>Catálogo de Actores</h2>
      <div className="actor-list">
        {actores.map((actor, index) => (
          <ActorCard key={index} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default Actores;
