import React from 'react';
import ActorCard from '../components/ActorCard';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <div>
      <h2>Catálogo de Actores</h2>
      <div className="actor-list">
        {actores.map((actor, index) => (
          <ActorCard key={index} actor={actor} />
        ))}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button
          onClick={() => navigate('/crear-actor')}
          style={{
            marginRight: '1rem',
            padding: '0.6rem 1.2rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Registrar nuevo actor
        </button>

        <button
          onClick={() => navigate('/eliminar-actor')}
          style={{
            padding: '0.6rem 1.2rem',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Eliminar actor
        </button>
      </div>
    </div>
  );
};

export default Actores;
