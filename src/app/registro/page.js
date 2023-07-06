'use client'

import principal from '../page.js'
import Button from '../../components/Button/Button.jsx';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from '../../components/Select/Select.jsx'
import { useState } from 'react'

const Registro = () => {
  const [errorIn, setErrorIn] = useState("");
  localStorage.setItem('loggedIn', null)

  const handleRegistro = (event) =>{
    event.preventDefault()
    const basedatosL=JSON.parse(localStorage.getItem('basedatos'))

    var email= document.getElementById('EmailR'); 
    var pass = document.getElementById('PasswordR');
    var passC = document.getElementById('PasswordConfirmR');
    var nom= document.getElementById('NombreR');
    var ape= document.getElementById('ApellidosR');
    var tipoDoc= document.getElementById('TipoDocR');
    var nDoc= document.getElementById('NroDocR');
    var role= document.getElementById('RoleR');

    const notNewUserData = basedatosL.find((user) => user.email === email.value)

    if (notNewUserData) {
        setErrorIn("email");
      } else {

        if (passC.value !== pass.value) {
            setErrorIn("passC");
          } else {
            if (((tipoDoc.value) == "DNI") && ((nDoc.value).length) != 8){
                setErrorIn("docLength")
              }else{
              if(((tipoDoc.value) == "Pasaporte") || ((tipoDoc.value) == "Carnet Extranjero") && ((nDoc.value).length) != 12){
                setErrorIn("docLength")
              }else{
            
            setErrorIn("");
            var newUserData ={email: email.value,
                              password: pass.value,
                              nombre: nom.value,
                              apellido:ape.value,
                              tipoDoc:tipoDoc.value,
                              nDoc:nDoc.value,
                              role:role.value}
            basedatosL.push(newUserData)
            localStorage.setItem('basedatos',JSON.stringify(basedatosL))
            window.location.href = "/login"
            }
          }
        }
      }
    
  }
    return (
        <div>
        <Form onSubmit={handleRegistro}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="EmailR">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="text" placeholder="|" required id="EmailR"/>
          {(errorIn=="email") ? <div>el usuario o email ya existe</div>:""}
        </Form.Group>

        <Form.Group as={Col} controlId="PasswordR">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="|" id="PasswordR"/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="space">
        </Form.Group>
        <Form.Group as={Col} controlId="PasswordConfirmR">
          <Form.Label>Ingrese Password nuevamente</Form.Label>
          <Form.Control type="password" placeholder="|" id="PasswordConfirmR"/>
          {(errorIn=="passC") ? <div>Las contraseñas no coinciden</div>:""}
        </Form.Group>
      </Row>


      <h6>Datos personales</h6>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="NombreR">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" placeholder="|" required id="NombreR"/>
        </Form.Group>

        <Form.Group as={Col} controlId="ApellidosR">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="|" required id="ApellidosR"/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="TipoDocR">
      <Form.Label>Tipo de documento</Form.Label>
        <Select optDefault ="DNI" opt1="Carnet Extranjero" opt2 ="Pasaporte" required id="TipoDocR"></Select>
      </Form.Group>

        <Form.Group as={Col} controlId="NroDocR">
          <Form.Label>Nro de documento</Form.Label>
          <Form.Control type="text" placeholder="|" required id ="NroDocR"/>
          {(errorIn=="docLength") ? <div>El tipo de documento y la cantidad de numeros no coinciden</div>:""}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        
        <Form.Group as={Col} controlId="RoleR">
          <Form.Label>Rol</Form.Label>
          <Select optDefault ="alumno" opt1="profesor" required id="roleR"></Select>
        </Form.Group>
        <Form.Group as={Col} controlId="space">
        </Form.Group>
      </Row>
      

      <Button variant="primary" type="submit" text ="Registrar"></Button>
    </Form>
    </div>
    )
}

export default Registro