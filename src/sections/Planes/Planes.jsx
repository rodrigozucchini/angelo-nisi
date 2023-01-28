import React from 'react';
import './Planes.css';

export const Planes = () => {
  return (
    <div className="back-card">
        <div className="card">
            <h1 className="card-text">Pre lanzamiento</h1>
            <p className="card-calendary">Del <b>01</b> de agosto de 2022 <br />al <b>31</b> de octubre de 2022</p>
            <p className="card-price">$147 USD</p>
            <div className="card-div-button">
                <button className="card-button">PRECIO NO DISPONIBLE</button>
            </div>
        </div>
        <div className="card">
            <h1 className="card-text">Lanzamiento</h1>
            <p className="card-calendary">Del <b>01</b> de noviembre de 2022 <br />al <b>31</b> de enero 2023</p>
            <p className="card-price">$247 USD</p>
            <div className="card-div-button">
                <button className="card-button">PRECIO NO DISPONIBLE</button>
            </div>
        </div>
        <div className="card-3">
            <h1 className="card-text-3">Precio estándar</h1>
            <p className="card-calendary">Del <b>01</b> de febrero 2023 <br />al <b>30</b> de abril 2023</p>
            <p className="card-price-yes-3">$349 USD</p>
            <div className="card-div-button">
                <a className="card-button-yes-3" target="_blank" href="https://walink.co/e3f56e">
                    ¡Quiero unirme al Programa ahora!
                </a>
            </div>
        </div>
        <p className="card-mensaje">
        A partir del 1 de Mayo del 2023 el precio del Programa pasará a ser
de <b>$450 USD </b>y nunca más volverás a bajar su precio. Aprovecha ahora y ahorra
<b> $100 USD </b>antes de que sea tarde.
        </p>
    </div>
  )
}
