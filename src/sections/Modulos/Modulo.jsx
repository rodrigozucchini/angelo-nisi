import React,{ useState,useEffect } from 'react';
import './Modulo.css';
import ReactPlayer from 'react-player';

const Modulos = () => {

    const [ action1, setAction1 ] = useState(false);
    const [ action2, setAction2 ] = useState(false);
    const [ action3, setAction3 ] = useState(false);
    const [ action4, setAction4 ] = useState(false);
    const [ action5, setAction5 ] = useState(false);
    const [ action6, setAction6 ] = useState(false);
    const [ action7, setAction7 ] = useState(false);
    const [ action8, setAction8 ] = useState(false);
    const [ action9, setAction9 ] = useState(false);
    const [ action10, setAction10 ] = useState(false);
    const [ action11, setAction11 ] = useState(false);
    const [ action12, setAction12 ] = useState(false);
    const [ action13, setAction13 ] = useState(false);
    const [ action14, setAction14 ] = useState(true);

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

    const actionPreg9 = () => {
        setAction9(!action9)
    }

    const actionPreg10 = () => {
        setAction10(!action10)
    }

    const actionPreg11 = () => {
        setAction11(!action11)
    }

    const actionPreg12 = () => {
        setAction12(!action12)
    }

    const actionPreg13 = () => {
        setAction13(!action13)
    }

    const actionPreg14 = () => {
        setAction14(action14)
    }

    const [modulosReview, setModulosReview] = useState(window.innerWidth < 800 ? false : true)

    const renderTestimonios = () => {
        if(window.innerWidth < 800) setModulosReview(false)
        else setModulosReview(true)
    }

    useEffect(() => {
      renderTestimonios()
      window.addEventListener("resize", renderTestimonios)
      return () => window.removeEventListener("resize", renderTestimonios)
    }, [])

  return (
    <div className="modulos">
        {
          modulosReview
          ?
          (
            <h1 className='modulos-h1'> CONOCE EL NUEVO "NETFLIX DEL DINERO"</h1>
          )
          :
          (
            <h1 className='modulos-h1'> CONOCE EL NUEVO <br />"NETFLIX DEL DINERO"</h1>
          )  
        }
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg1}>
                { action1 === false ? "\u00A0+ \u00A0 \u00A0 \u00A0 Módulo 0. Introducción." : "\u00A0 - \u00A0 \u00A0 \u00A0Módulo 0. Introducción." }
            </span>
            { 
            action1 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Presentación personal, ¿quién soy?</li>
                    <li>El síndrome de la rana hirviendo</li>
                    <li>Los 9 principios de las Finanzas</li>
                    <li>Modelo V.A.R.K.</li>
                    <li>Hábitos de estudio.</li>
                    <li>Metodología del programa</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg2}>
                { action2 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 1. Diagnóstico completo." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 1. Diagnóstico completo." }
            </span>
            { 
            action2 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Test y definiciones generales</li>
                    <li>Análisis Subjetivo</li>
                    <li>Análisis Objetivo</li>
                    <li>Análisis Relativo</li>
                    <li>BONUS - Errores financieros</li>

                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg3}>
                { action3 === false ? "\u00A0+ \u00A0 \u00A0  \u00A0 Módulo 2. Conceptos básicos e intermedios de finanzas." : "\u00A0- \u00A0 \u00A0  \u00A0Módulo 2. Conceptos básicos e intermedios de finanzas." }
            </span>
            { 
            action3 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Las 5 etapas de las finanzas</li>
                    <li>La teoría financiera, el mecanismo del dinero</li>

                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg4}>
                { action4 === false ? "\u00A0+ \u00A0 \u00A0  \u00A0Módulo 3. Estado de situación financiera." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 3. Estado de situación financiera." }
            </span>
            { 
            action4 === true ? 
                <ul className="modulos-yes-rest">
                    <li>¿Qué es y qué beneficio tiene el ESF?</li>
                    <li>Paso a paso para crear en excel</li>
                    <li>Cómo leer la información del ESF</li>
                    <li>Indicadores de salud financiera</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg5}>
                { action5 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 4. La filosofía del millón de dólares. " : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 4. La filosofía del millón de dólares. " }
            </span>
            { 
            action5 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Las 13 cualidades de los multimillonarios</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg6}>
                { action6 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 5. Asignación estratégica del capital." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 5. Asignación estratégica del capital." }
            </span>
            { 
            action6 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Tipos de ingresos</li>
                    <li>Ingresos variables</li>
                    <li>Tipos de gastos</li>
                    <li>¿Qué es un presupuesto?</li>
                    <li>Presupuesto Tradicional</li>
                    <li>Presupuesto por Defecto</li>
                    <li>Flujo de efectivo</li>
                    <li>Ulises y las tentaciones</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg7}>
                { action7 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 6. Entendimiento y control de los gastos." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 6. Entendimiento y control de los gastos." }
            </span>
            { 
            action7 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Ley de Parkinson</li>
                    <li>Deseo vs necesidad</li>
                    <li>Gastos hormiga</li>
                    <li>Planilla Cash Flow King</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg8}>
                { action8 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 7. Creación del Fondo de emergencias." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 7. Creación del Fondo de emergencias." }
            </span>
            { 
            action8 === true ? 
                <ul className="modulos-yes-rest">
                    <li>¿Qué es y cuáles son los beneficios del FDE?</li>
                    <li>Cómo crearlo paso a paso</li>
                    <li>Consejos finales</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg9}>
                { action9 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 8. El ahorro como base de la libertad." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 8. El ahorro como base de la libertad." }
            </span>
            { 
            action9 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Definiendo el ahorro</li>
                    <li>Errores comunes a evitar</li>
                    <li>Crear distintos fondos</li>
                    <li>10 Retos para aplicar hoy mismo</li>
                    <li>Calculando tu meta de retiro</li>

                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg10}>
                { action10 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 9. Establecimiento de metas profesional." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 9. Establecimiento de metas profesional." }
            </span>
            { 
            action10 === true ? 
            <ul className="modulos-yes-rest">
                <li>La importancia de las metas</li>
                <li>Errores a evitar</li>
                <li>¿Por qué el 97% falla?</li>
                <li>El método de la Varita Mágica</li>
                <li>Reflexiones finales</li>
            </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg11}>
                { action11 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 10. Hábitos y plan financiero." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 10. Hábitos y plan financiero." }
            </span>
            { 
            action11 === true ? 
            <ul className="modulos-yes-rest">
                <li>El Maestro y el Aprendiz</li>
                <li>Las 5 reglas del Oro</li>
                <li>Cómo aplicar todo lo aprendido</li>
                <li>Creando el Plan Personalizado</li>
            </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg12}>
                { action12 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 11. Múltiples fuentes de ingresos." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 11. Múltiples fuentes de ingresos." }
            </span>
            { 
            action12 === true ? 
                <p className="modulos-yes-rest">El contenido del módulo 11 se desbloqueará el 10/12/2022</p>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg13}>
                { action13 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 12. Guía básica previo a invertir." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 12. Guía básica previo a invertir." }
            </span>
            { 
            action13 === true ? 
                <p className="modulos-yes-rest">El contenido del módulo 12 se desbloqueará el 10/12/2022</p>
            :
                null
            }
        </div>
        { 
        modulosReview
         ?
        (<div className="modulos-div-video">
            <span className="modulos-yes-video" >
                <ReactPlayer 
                    url={"https://youtu.be/3VKdks_9RhI"}
                    width="100%"
                    height="600px"
                    controls
                    muted
                />
                <p className="modulos-yes-rest-video">Accede a más de 50 lecciones en vídeos que te harán libre financieramente (si las pones en práctica)</p>
            </span>
        </div>)
        :
        (<div className="modulos-div-video">
            <span className="modulos-yes-video" >
                <ReactPlayer 
                    url={"https://youtu.be/3VKdks_9RhI"}
                    width="100%"
                    height="400px"
                    controls
                    muted
                />
                <p className="modulos-yes-rest-video">Accede a más de 50 lecciones en vídeos que te harán libre financieramente (si las pones en práctica)</p>
            </span>
        </div>)
        }
    </div>
  )
}

export default Modulos;