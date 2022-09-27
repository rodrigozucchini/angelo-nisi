import React from 'react';
import './Garantia.css';

const Garantia = () => {
  return (
    <div className='container-garantia'>
        <img className="container-imagen-garantia" src="https://images.unlayer.com/projects%2F237%2F1645363774285-31.png" alt="garantia" />
        <div>
            <h1 className="garantia-h1">GARANTÍA DE REEMBOLSO</h1>
            <p className="garantia-text">Estoy tan convencido del potencial que tiene este programa 
            <br />
            para transformar tu realidad financiera que al adquirirlo 
            <br />
            tendrás el beneficio de contar con una garantía de satisfacción de 7 días
            <br />
            si por algún motivo no cumple tus expectativas puedes solicitar la devolución del 100% de tu dinero 
            <br />
            no tienes que dar justificaciones ni llenar complicados formularios con preguntas incómodas.
            </p>
            <div className="garantia-div-button">
                <a className="garantia-button" href="https://pay.hotmart.com/Y70033327T?off=7hted3u5" target="_blank">
                  Quiero comprar de forma segura
                </a>
            </div>
        </div>
    </div>
  )
}

export default Garantia;