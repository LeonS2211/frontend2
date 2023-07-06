import React from 'react';

const PersonalInfo = ({ persona, setPersona }) => {
  const handleNombresChange = (e) => {
    setPersona({ ...persona, nombres: e.target.value });
  };

  const handleApellidosChange = (e) => {
    setPersona({ ...persona, apellidos: e.target.value });
  };

  const handleTipoDocumentoChange = (e) => {
    setPersona({ ...persona, tipodocumento: e.target.value });
  };

  const handleNumeroChange = (e) => {
    setPersona({ ...persona, numero: e.target.value });
  };

  const handleRolChange = (e) => {
    setPersona({ ...persona, rol: e.target.value });
  };

  return (
    <div>
      <h3>Información Personal</h3>
      <label htmlFor="nombres">Nombres</label>
      <input
        type="text"
        id="nombres"
        value={persona.nombres}
        onChange={handleNombresChange}
      />

      <label htmlFor="apellidos">Apellidos</label>
      <input
        type="text"
        id="apellidos"
        value={persona.apellidos}
        onChange={handleApellidosChange}
      />

      <label htmlFor="tipodocumento">Tipo de documento</label>
      <input
        type="text"
        id="tipodocumento"
        value={persona.tipodocumento}
        onChange={handleTipoDocumentoChange}
      />

      <label htmlFor="numero">Número</label>
      <input
        type="text"
        id="numero"
        value={persona.numero}
        onChange={handleNumeroChange}
      />

      <label htmlFor="rol">Rol</label>
      <input
        type="text"
        id="rol"
        value={persona.rol}
        onChange={handleRolChange}
      />
    </div>
  );
};

export default PersonalInfo;
