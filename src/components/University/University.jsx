import React, { useState } from 'react';
import Chip from '../../components/ChipG/ChipG.jsx';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

const University = ({ arr1, arr2, arr3 }) => {
  const [textBusqueda1, setTextBusqueda1] = useState('');
  const [textBusqueda2, setTextBusqueda2] = useState('');
  const [textBusqueda3, setTextBusqueda3] = useState('');

  const handleUniversidadChange = (e) => {
    setTextBusqueda1(e.target.value);
  };

  const handleCarreraChange = (e) => {
    setTextBusqueda2(e.target.value);
  };

  const handleCursoChange = (e) => {
    setTextBusqueda3(e.target.value);
  };

  const handleDropdownSelect = (option, dropdownId) => {
    switch (dropdownId) {
      case 'dropdown1':
        setTextBusqueda1(option);
        break;
      case 'dropdown2':
        setTextBusqueda2(option);
        break;
      case 'dropdown3':
        setTextBusqueda3(option);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown1">
            Opciones 1
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {arr1.map((option) => (
              <Dropdown.Item
                key={option}
                onClick={() => handleDropdownSelect(option, 'dropdown1')}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          type="text"
          id="universidad"
          value={textBusqueda1}
          onChange={handleUniversidadChange}
        />

        <ul className="nobullets">
          {arr1
            .filter((f) => f.includes(textBusqueda1))
            .map((universidad) => {
              /*return (
                <li key={universidad}>
                  <Chip text={universidad} />
                </li>
              );*/
            })}
        </ul>
      </div>

      <div>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown2">
            Opciones 2
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {arr2.map((option) => (
              <Dropdown.Item
                key={option}
                onClick={() => handleDropdownSelect(option, 'dropdown2')}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          type="text"
          id="carrera"
          value={textBusqueda2}
          onChange={handleCarreraChange}
        />

        <ul className="nobullets">
          {arr2
            .filter((f) => f.includes(textBusqueda2))
            .map((carrera) => {
              /*return (
                <li key={carrera}>
                  <Chip text={carrera} />
                </li>
              );*/
            })}
        </ul>
      </div>

      <div>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown3">
            Opciones 3
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {arr3.map((option) => (
              <Dropdown.Item
                key={option}
                onClick={() => handleDropdownSelect(option, 'dropdown3')}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          type="text"
          id="curso"
          value={textBusqueda3}
          onChange={handleCursoChange}
        />

        <ul className="nobullets">
          {arr3
            .filter((f) => f.includes(textBusqueda3))
            .map((curso) => {
              /*return (
                <li key={curso}>
                  <Chip text={curso} />
                </li>
              );*/
            })}
        </ul>
      </div>
    </div>
  );
};

export default University;
