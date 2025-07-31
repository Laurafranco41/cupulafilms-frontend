import React, { useState } from 'react';
import axios from 'axios';

const CrearActor = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [rol, setRol] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/actores', {
        nombre,
        edad,
        rol,
      });
      setMensaje('Actor creado con éxito');
      setNombre('');
      setEdad('');
      setRol('');
    } catch (error) {
      setMensaje('Error al crear actor');
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Registrar Nuevo Actor</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Edad:</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />

        <label>Especialidad:</label>
        <input
          type="text"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          required
        />

        <button type="submit">Registrar</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default CrearActor;
