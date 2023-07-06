import React from 'react';
import { useState } from 'react'

const UserData = ({ usuario, setUsuario }) => {

    const [showDatosUsuario, setShowDatosUsuario ] = useState(true)
    



  const handleUsuarioChange = (e) => {
    setUsuario({ ...usuario, usuario: e.target.value });
  };

  const handleConstraseñaActualChange = (e) => {
    setUsuario({ ...usuario, constraseñaActual: e.target.value });
  };

  const handleNuevaContraseñaChange = (e) => {
    setUsuario({ ...usuario, nuevaContraseña: e.target.value });
  };

  const handleRepetirContraseñaChange = (e) => {
    setUsuario({ ...usuario, repetirContraseña: e.target.value });
  };

  return (
    <div>
      <label htmlFor="usuario">Usuario</label>
      <input
        type="text"
        id="usuario"
        value={usuario.usuario}
        onChange={handleUsuarioChange}
      />

      <label htmlFor="constraseñaActual">Contraseña Actual</label>
      <input
        type="password"
        id="constraseñaActual"
        value={usuario.constraseñaActual}
        onChange={handleConstraseñaActualChange}
      />

      <label htmlFor="nuevaContraseña">Nueva Contraseña</label>
      <input
        type="password"
        id="nuevaContraseña"
        value={usuario.nuevaContraseña}
        onChange={handleNuevaContraseñaChange}
      />

      <label htmlFor="repetirContraseña">Repetir Contraseña</label>
      <input
        type="password"
        id="repetirContraseña"
        value={usuario.repetirContraseña}
        onChange={handleRepetirContraseñaChange}
      />
    </div>
  );
};

export default UserData;
