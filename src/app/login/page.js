'use client'
import "../login/page.modul.css"
import { useState } from "react";
import Button from '../../components/Button/Button.jsx';
import Form from 'react-bootstrap/Form';
import Link from '../../components/Link/Link.jsx';
import { Dangrek } from "next/font/google";
import FilterNames from "@/components/FilterNames/FilterNames.jsx";

const Login = () => {

  const [errorIn, setErrorIn] = useState("");
  const basedatosO=JSON.parse(localStorage.getItem('basedatos'))

  localStorage.setItem('loggedIn', null)


  const handleSubmit = (event) => {
    
    event.preventDefault();

    var uname= document.getElementById('unameL'); 
    var pass = document.getElementById('passL');

    
    var userData = basedatosO.find((user) => user.email === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
       
        setErrorIn("pass");
      } else {
        localStorage.setItem('loggedIn',JSON.stringify(userData))
        window.location.href = "/principal"
      }
    } else {
      setErrorIn("uname");
    }
  };
  const handleSalir = (event) => {
    event.preventDefault();

    window.location.href = "../"
  }


  return (
      <div className="login-form">
        <div className="form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="unameL">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control type="text" placeholder="|" required id="unameL" />
              {(errorIn=="uname") ? <div>el usuario o email no existe</div>:""}
            </Form.Group>

            <Form.Group className="mb-3" controlId="passL" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="|" required id="passL"/>
              {(errorIn=="pass") ? <div>la contraseña esta mal</div>:""}
            </Form.Group>
            <div className="opci">
              <Button  type="submit" className='op1' texto="Iniciar Sesion"/>
            <div className="op2"><Link href="/registro" text="Registro de nuevo usuario "/><span/>
              <Link href="#" text="Olvide mi contraseña"/></div>
            </div>
          </Form>
        <Form onSubmit={handleSalir}>
        <div className="op3">
        <Button variant="danger" type="submit"  texto="Salir"/>
        </div>
        </Form>
        </div>
        <div><FilterNames></FilterNames></div>
      </div>
  );
}
export default Login