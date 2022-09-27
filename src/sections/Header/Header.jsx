import React from 'react'
import Button from './../Button-call/Button-call';
import Flyer from './../Flyer/Flyer';
import "./Header.css";

const Header = () => {
  return (
    <header>
        <div>
          <p className='after-title'>De centavos están hechos los millones</p>
        </div>
        {/*<hr className='hr-title' /> */}
        <h1 className="title">Programa de Transformación Financiera</h1>
        <Flyer />
        <h2 className="subtitle">Conoce el sistema de 12 semanas que te convierte en un experto de la administración financiera y que te ayudará a sentar las bases sólidas que necesitas si de verdad deseas lograr cada una de tus metas sin importar el monto necesario.</h2>
        <Button />
    </header>
  )
}

export default Header
