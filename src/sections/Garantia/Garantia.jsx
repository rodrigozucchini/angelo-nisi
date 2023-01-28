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
            no tienes que dar justificaciones ni llenar complicados formularios con preguntas incómodas <br />(SOLO APLICA PARA VENTAS REALIZADAS MEDIANTE HOTMART)
            </p>
            <div className="garantia-div-button">
                <a className="garantia-button" href="https://walink.co/e3f56e" target="_blank">
                  Quiero comprar de forma segura
                </a>
            </div>
            <p className="garantia-text2">Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza un
control editorial previo de los productos ofertados, ni evalúa el tecnicismo o la
experiencia de quienes los elaboran. La existencia de un producto y su adquisición,
a través de la plataforma, no puede considerarse garantía de calidad de contenido y
resultado, en ningún caso. Al adquirirlo, el comprador declara conocer esta
información. Puedes acceder a los términos y políticas de Hotmart aquí, incluso
antes de finalizar la compra.</p>
        </div>
    </div>
  )
}

export default Garantia;