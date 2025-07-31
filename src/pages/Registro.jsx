import React, { useState } from 'react';
import axios from 'axios';

const Registro = () => {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarRegistro = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await axios.post('http://localhost:4000/api/auth/register', {
        usuario,
        correo,
        contraseña,
      });
      setMensaje(respuesta.data.mensaje);
      setUsuario('');
      setCorreo('');
      setContraseña('');
    } catch (error) {
      setMensaje('Error en el registro');
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={manejarRegistro}>
        <label>Usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />

        <label>Correo:</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />

        <button type="submit">Registrarse</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Registro;
