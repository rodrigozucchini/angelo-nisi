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
        <h2 className="subtitle">Aprende a crear tu propio plan financiero personalizado y automatizado aplicando
un sistema de 12 semanas con resultados comprobados. <br/>Crea tus bases financieras
sólidas y prepárate para invertir inteligentemente.</h2>
        <Button />
    </header>
  )
}

export default Header
