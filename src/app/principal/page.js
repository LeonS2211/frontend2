'use client'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './page.modul.css'
import Chip from '../../components/Chip/Chip.jsx'
import { useState } from 'react'
import { useEffect } from 'react';
import BotonCalif from '@/components/BotonCalif/BotonCalif'
//import citasAc from '../../api/citasAc'
import CitasApi from '../api/citas'

import FilterNames from '@/components/FilterNames/FilterNames'

const pDocentes = () => {


    var loggedIn = JSON.parse(localStorage.getItem('loggedIn'))
    const arr = CitasApi.findAll();

    return(
    <div>
        {(loggedIn.role == "alumno") ? 
      <div className='welcome'>
      <p className='welcome-text'>¡Bienvenido , {loggedIn.nombre}!  </p>
      <div className='welcome-line'></div>
      <div className='block-citas'>
          
      
        </div>
        <div className='espacio'></div>
        

    </div> 
    :
    <div className='welcome'>
    <p className='welcome-text'>¡Bienvenido , Profesor {loggedIn.nombre}!  </p>
    <div className='welcome-line'></div>
    <div className='block-citas'>
        <p>Proximas Citas</p>
        
    
      </div>
      
      <div className='espacio'></div>
      

</div> 
}
    </div>
    
    )
} 

export default pDocentes


