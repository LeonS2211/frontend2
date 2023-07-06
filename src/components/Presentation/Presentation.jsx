import React from 'react';

const Presentation = ({ presentacion, setPresentacion }) => {
  const handleTituloChange = (e) => {
    setPresentacion({ ...presentacion, titulo: e.target.value });
  };

  const handlePresentacionChange = (e) => {
    setPresentacion({ ...presentacion, presentacion: e.target.value });
  };

  return (
    <div>
      <label htmlFor="titulo">Título</label>
      <input
        type="text"
        id="titulo"
        value={presentacion.titulo}
        onChange={handleTituloChange}
      />

      <label htmlFor="presentacion">Presentación</label>
      <input
        type="text"
        id="presentacion"
        value={presentacion.presentacion}
        onChange={handlePresentacionChange}
      />
    </div>
  );
};

export default Presentation;
