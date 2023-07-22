'use client'

import UniversidadesApi from './api/universidades.js';
import styles from './page.module.css'
import Link from '../components/Link/Link.jsx';
import { useEffect, useState } from "react"

export default function Home() {
  const [ universidad, setUniversidad ] = useState()

const handleOnLoad = async () => {
  const result = await UniversidadesApi.findAll();
  setUniversidad(result.data);
  console.log(universidad)
}

useEffect(() => {
  handleOnLoad();
}, [])

  return (
    <div className={styles.inte}>
      <div className={styles.red}>
        <Link href="/login " text="BIENVENIDO AL MUNDO MAGICO DE GUMBALL" />
      </div>
      
    </div>

  )
}

