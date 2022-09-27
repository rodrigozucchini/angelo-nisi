import React from 'react';
import './Bonus.css';
import Freedom from '../../assets/freedom.png';
import Cash from '../../assets/cash.png';
import Mockupe from '../../assets/mockup-e.png';
import Mockupp from '../../assets/mockup-p.png';

const Bonus = () => {
  return (
    <div className='bonus-div'>
    <h1 className='title-bonus'>¡Y eso no es todo!</h1>
    <p className='primer-bonus'>
    Realmente considero que la Educación Financiera 
    <br />
    <br />
    es sumamente importante en este tiempo
    <br />
    <br />
    por eso al adquirir este programa hoy mismo 
    <br />
    <br />
    voy a regalarte 4 BONUS de mucho valor
    </p>
    <div className="freedom">
        <h1 className="title-freedom">#BONUS 1 <br />Programa “Freedom Machine”</h1>
        <img className="img-freedom" src={Freedom}  />
        <p className="freedom-text"><b>"La máquina de la libertad"</b> es un programa financiero automático diseñado por <b>Angelo Nisi</b> con el cuál podrás realizar informes completos que te ayudarán a mantener el control sobre tu dinero mejorar la toma de decisiones y además crear el plan que te permita medir el crecimiento de tu patrimonio a largo plazo. <br />En pocas palabras es la herramienta que te llevará a medir tu progreso hacia la libertad financiera.</p>
    </div>
    <div className="cash">
        <h1 className="title-cash">#BONUS 2 <br />Programa “Cash Flow King”</h1>
        <img className="img-cash" src={Cash}  />
        <p className="cash-text"><b>“El flujo de efectivo es el rey”</b> es una planilla automática diseñada por Angelo Nisi que te servirá para crear proyecciones sobre tu dinero a lo largo del año, además de conocer a nivel porcentual (%) la fortaleza de cada uno de tus ingresos, y todo esto solo por registrar todos tus ingresos y gastos, del resto se encargan las fórmulas automáticas. Básicamente te ahorrarás cientos de horas haciendo cálculos difíciles y aburridos para conocer esos indicadores.</p>
    </div>
    <div className="ebook">
        <h1 className="title-ebook">#BONUS 3 <br />Ebook Conciencia Financiera</h1>   
        <img className="img-ebook" src={Mockupe}  />
        <p className="ebook-text">Una guía de 50 páginas en PDF donde te comparto las 3 claves que todos deberían saber para ganar más dinero.
        <br />
        <br />
        - Clave 1: Los ciclos económicos
        <br />
        - Clave 2: El dinero es deuda
        <br />
        - Clave 3: Ceguera financiera
        <br />
        <br />
        Únete a las más de 1.500 personas que ya descargaron su ebook y están creando una vida de riqueza y prosperidad.
        </p>
    </div>
    <div className="ebook">
        <h1 className="title-ebook">#BONUS 4 <br />Workbook</h1>   
        <img className="img-ebook" src={Mockupp}  />
        <p className="ebook-text">Con el fin de mejorar la experiencia mientras vas desarrollando el programa vas a tener acceso a un documento profesional en PDF que contiene un resumen de todos los ejercicios prácticos que harás a lo largo del programa ordenados según los distintos módulos.</p>
    </div>
    </div>
  )
}

export default Bonus;