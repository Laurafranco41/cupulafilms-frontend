import React, { useState } from 'react';
import axios from 'axios';

const EliminarActor = () => {
  const [id, setId] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:3000/api/actores/${id}`);
      setMensaje('Actor eliminado correctamente');
      setId('');
    } catch (error) {
      setMensaje('Error al eliminar actor');
    }
  };

  return (
    <div className="form-container">
      <h2>Eliminar Actor</h2>
      <form onSubmit={handleDelete}>
        <label>ID del actor:</label>
        <input value={id} onChange={e => setId(e.target.value)} required />
        <button type="submit">Eliminar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default EliminarActor;
