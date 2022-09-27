import React,{ useState } from 'react';
import './Preguntas-frecuentes.css';

const PreguntasFrecuentes = () => {

    const [ action1, setAction1 ] = useState(false);
    const [ action2, setAction2 ] = useState(false);
    const [ action3, setAction3 ] = useState(false);
    const [ action4, setAction4 ] = useState(false);
    const [ action5, setAction5 ] = useState(false);
    const [ action6, setAction6 ] = useState(false);
    const [ action7, setAction7 ] = useState(false);
    const [ action8, setAction8 ] = useState(false);

    const actionPreg1 = () => {
        setAction1(!action1)
    }

    const actionPreg2 = () => {
        setAction2(!action2)
    }

    const actionPreg3 = () => {
        setAction3(!action3)
    }

    const actionPreg4 = () => {
        setAction4(!action4)
    }

    const actionPreg5 = () => {
        setAction5(!action5)
    }

    const actionPreg6 = () => {
        setAction6(!action6)
    }

    const actionPreg7 = () => {
        setAction7(!action7)
    }

    const actionPreg8 = () => {
        setAction8(!action8)
    }

  return (
    <div className="preguntas-frecuentes">
        <h1 className='preguntas-frecuentes-h1'>PREGUNTAS FRECUENTES</h1>
        <div className="preguntas-frecuentes-div">
            <span className="preguntas-frecuentes-yes" onClick={actionPreg1}>
                { action1 === false ? "\u00A0+ \u00A0 \u00A0 | \u00A0 ¿El pago es único o mensual?" : "\u00A0 - \u00A0 \u00A0 | \u00A0¿El pago es único o mensual?" }
            </span>
            { 
            action1 === true ? 
                <p className="preguntas-frecuentes-yes-rest">El acceso al curso se paga por única vez y vas a tener acceso de por vida al contenido junto con todas sus actualizaciones.</p>
            :
                null
            }
        </div>
        <div className="preguntas-frecuentes-div">
            <span className="preguntas-frecuentes-yes" onClick={actionPreg2}>
                { action2 === false ? "\u00A0+ \u00A0 \u00A0  | \u00A0¿Cómo se puede abonar? " : "\u00A0- \u00A0 \u00A0  | \u00A0¿Cómo se puede abonar? " }
            </span>
            { 
            action2 === true ? 
                <p className="preguntas-frecuentes-yes-rest">En el link de pago vas a poder ver las diferentes opciones, si deseas contactarme al privado para hacer el pago podes hacerlo mediante el instagram de la comunidad “@emperador.financiero”. Se aceptan todos los medios de pago: Efectivo, Tarjeta de Crédito, Tarjeta de Débito, Transferencia Bancaria, Criptomonedas y PayPal.</p>
            :
                null
            }
        </div>
        <div className="preguntas-frecuentes-div">
            <span className="preguntas-frecuentes-yes" onClick={actionPreg3}>
                { action3 === false ? "\u00A0+ \u00A0 \u00A0  |\u00A0 ¿Puedo acceder desde cualquier país?" : "\u00A0- \u00A0 \u00A0|  \u00A0¿Puedo acceder desde cualquier país?" }
            </span>
            { 
            action3 === true ? 
                <p className="preguntas-frecuentes-yes-rest">Sí, las plataformas que utilizamos para visualizar los videos funcionan en casi todos los países del mundo.</p>
            :
                null
            }
        </div>
        <div className="preguntas-frecuentes-div">
            <span className="preguntas-frecuentes-yes" onClick={actionPreg4}>
                { action4 === false ? "\u00A0+ \u00A0 \u00A0 | \u00A0¿Necesito conocimientos técnicos previos?" : "\u00A0- \u00A0 \u00A0  | \u00A0¿Necesito conocimientos técnicos previos?" }
            </span>
            { 
            action4 === true ? 
                <p className="preguntas-frecuentes-yes-rest">En absoluto, el contenido está diseñado para que cualquier persona pueda comprenderlo y aplicarlo desde el primer momento y empezar a crear unas buenas bases financieras.</p>
            :
                null
            }
        </div>
        <div className="preguntas-frecuentes-div">
            <span className="preguntas-frecuentes-yes" onClick={actionPreg5}>
                { action5 === false ? "\u00A0+ \u00A0 \u00A0  | \u00A0¿Cuál es la metodología del programa?" : "\u00A0- \u00A0 \u00A0  | \u00A0¿Cuál es la metodología del programa?" }
            </span>
            { 
            action5 === true ? 
                <p className="preguntas-frecuentes-yes-rest"> La metodología del curso es online, así que vas a poder acceder al contenido y verlo cuando desees, a tu propio tiempo.</p>
            :
                null
            }
        </div>
        <div className="preguntas-frecuentes-div">
            <span className="preguntas-frecuentes-yes" onClick={actionPreg6}>
                { action6 === false ? "\u00A0+ \u00A0 \u00A0  | \u00A0¿Puedo acceder desde múltiples dispositivos?" : "\u00A0- \u00A0 \u00A0  | \u00A0¿Puedo acceder desde múltiples dispositivos?" }
            </span>
            { 
            action6 === true ? 
                <p className="preguntas-frecuentes-yes-rest">Sí, siempre y cuando accedas a la plataforma con tu usuario y contraseña desde el dispositivo desde el cuál desees verlo.</p>
            :
                null
            }
        </div>
        <div className="preguntas-frecuentes-div">
            <span className="preguntas-frecuentes-yes" onClick={actionPreg7}>
                { action7 === false ? "\u00A0+ \u00A0 \u00A0  | \u00A0¿Cuál es la duración del contenido?" : "\u00A0- \u00A0 \u00A0  | \u00A0¿Cuál es la duración del contenido?" }
            </span>
            { 
            action7 === true ? 
                <p className="preguntas-frecuentes-yes-rest">La duración total entre los 8 videos es de 5 horas.</p>
            :
                null
            }
        </div>
        <div className="preguntas-frecuentes-div">
            <span className="preguntas-frecuentes-yes" onClick={actionPreg8}>
                { action8 === false ? "\u00A0+ \u00A0 \u00A0  | \u00A0¿Tendré soporte para resolver las dudas que me surjan?" : "\u00A0- \u00A0 \u00A0  | \u00A0¿Tendré soporte para resolver las dudas que me surjan?" }
            </span>
            { 
            action8 === true ? 
                <p className="preguntas-frecuentes-yes-rest">Sí, en el primer video del curso vas a poder encontrar el link de acceso a nuestro Telegram privado que tenemos exclusivamente para los alumnos del curso. Ahí vas a poder plantear tus dudas y todas las preguntas que te surjan para que te podamos ayudar.</p>
            :
                null
            }
        </div>
    </div>
  )
}

export default PreguntasFrecuentes