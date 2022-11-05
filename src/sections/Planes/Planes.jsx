import React from 'react';
import './Planes.css';

export const Planes = () => {
  return (
    <div className="back-card">
        <div className="card">
            <h1 className="card-text">Primera etapa</h1>
            <p className="card-calendary">Del <b>01</b> de junio de 2022 <br />al <b>31</b> de julio de 2022</p>
            <p className="card-price">$99 USD</p>
            <div className="card-div-button">
                <button className="card-button">PRECIO NO DISPONIBLE</button>
            </div>
        </div>
        <div className="card">
            <h1 className="card-text">Segunda etapa</h1>
            <p className="card-calendary">Del <b>01</b> de agosto de 2022 <br />al <b>31</b> de octubre 2022</p>
            <p className="card-price">$147 USD</p>
            <div className="card-div-button">
                <button className="card-button">PRECIO NO DISPONIBLE</button>
            </div>
        </div>
        <div className="card-3">
            <h1 className="card-text-3">Tercera etapa</h1>
            <p className="card-calendary">Del <b>01</b> de noviembre 2022 <br />al <b>31</b> de diciembre 2022</p>
            <p className="card-price-yes-3">$199 USD</p>
            <div className="card-div-button">
                <a className="card-button-yes-3" target="_blank" href="https://wa.link/2jm7er">
                    ¡Quiero unirme al Programa ahora!
                </a>
            </div>
        </div>
        <p className="card-mensaje">
            Luego de que se termine el tiempo el precio pasará a ser de <b>$297 USD </b>y nunca más va a volver a costar <b>$199 USD</b>, aprovecha y <b>AHORRA $99 USD </b>antes de que sea tarde.
        </p>
    </div>
  )
}
