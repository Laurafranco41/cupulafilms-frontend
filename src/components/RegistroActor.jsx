import React, { useState } from 'react';

const RegistroActor = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const manejarRegistro = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/api/actores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: Date.now(),
        nombre,
        edad: parseInt(edad),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Actor registrado:', data);
        alert('Actor registrado exitosamente');
        setNombre('');
        setEdad('');
      })
      .catch((err) => console.error('Error al registrar actor:', err));
  };

  return (
    <form onSubmit={manejarRegistro}>
      <h2>Registrar Actor</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        required
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistroActor;
