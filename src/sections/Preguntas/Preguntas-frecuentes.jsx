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
                <p className="preguntas-frecuentes-yes-rest">Al dar clic sobre algunos de los botones de compra que puedes visualizar a lo largo
                de la página, la misma te redireccionará hacia mi contacto de WhatsApp personal,
                de esta manera podremos personalizar el método de pago para encontrar cuál es la
                mejor opción para ambos. En cada país las comisiones por IVA y diversos
                impuestos son diferentes, por este motivo elijo tomarme el tiempo de hacerlo
                personalizado, <b>así te puedes ahorrar hasta un 21% al realizar la compra.</b> <br /><br />
                En caso de que no funcione el link, puedes hablarme directamente al Instagram de
                la comunidad @emperador.financiero.<br /><br />
                Se aceptan todos los medios de pago, efectivo mediante Western Union, tarjeta de
                crédito, tarjeta de débito, transferencia bancaria (dependiendo el país), PayPal y
                Criptomonedas.<br /><br /><br />
                (El texto que dice “así te puedes ahorrar hasta un 21% al realizar la compra ponerlo
                en negrita)
                </p>
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
                <p className="preguntas-frecuentes-yes-rest">LA METODOLOGÍA DEL PROGRAMA ES 100% ONLINE, ESTO
                SIGNIFICA QUE VAS A PODER ACCEDER AL CONTENIDO Y VERLO CUANDO
                DESEES, A TU PROPIO RITMO.<br /><br />
                ES IMPORTANTE ACLARAR QUE EL PROGRAMA ESTÁ DISEÑADO CON EL FIN
                DE PODER DEDICARLE SOLAMENTE 2 HORAS CADA SEMANA, ES DECIR,
                ESTUDIAR 1 MÓDULO POR SEMANA DURANTE LOS PRÓXIMOS 3 MESES.
                CASI TODOS TENEMOS 2 HORAS PARA DEDICARLE A NUESTRO
                CRECIMIENTO PERSONAL Y FINANCIERO.<br /><br />
                ADEMÁS, RECIENTEMENTE DECIDÍ CREAR UN GRUPO PRIVADO PARA LOS
                ALUMNOS CON EL FIN DE MANTENER UNA COMUNICACIÓN ACTIVA Y
                APORTARNOS VALOR ENTRE TODOS PARA LOGRAR MEJORAR NUESTROS
                RESULTADOS.
                </p>
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
                <p className="preguntas-frecuentes-yes-rest">ACTUALMENTE, EL PROGRAMA CUENTA CON MÁS DE 11
                HORAS DE CONTENIDO GRABADO CON UNA GRAN CALIDAD DE AUDIO Y
                VIDEO, 3 EXCELS COMO HERRAMIENTAS PRÁCTICAS Y 2 WORKBOOKS DE
                TRABAJO. <br /> <br />
                PRÓXIMAMENTE, SE AÑADIRÁN DIFERENTES ACTUALIZACIONES JUNTO
                CON NUEVO CONTENIDO DE ALTÍSIMO VALOR.</p>
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
                <p className="preguntas-frecuentes-yes-rest">CLARO QUE SÍ, UNA VEZ REALIZADA LA COMPRA Y A LO
                LARGO DEL MÓDULO DE INTRODUCCIÓN, ENCONTRARÁS ACCESO A UN
                LINK QUE TE REDIRECCIONARÁ HACIA UN GRUPO EXCLUSIVO PARA LOS
                CLIENTES DEL PROGRAMA. ALLÍ MISMO PODRÁS PLANTEAR LAS DUDAS Y
                PREGUNTAS QUE TE SURJAN.<br /> <br />
                ADEMÁS, CONTARÁS CON UN SEGUIMIENTO PERSONALIZADO CON ANGELO
                DURANTE LOS 90 DÍAS QUE ESTARÁS REALIZANDO EL PROGRAMA.</p>
            :
                null
            }
        </div>
    </div>
  )
}

export default PreguntasFrecuentes