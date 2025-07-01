import React from 'react';

const ActorCard = ({ actor }) => {
  return (
    <div className="card">
      <img src={actor.foto} alt={actor.nombre} />
      <h3>{actor.nombre}</h3>
      <p>Edad: {actor.edad}</p>
      <p>Especialidad: {actor.rol}</p>
    </div>
  );
};

export default ActorCard;
