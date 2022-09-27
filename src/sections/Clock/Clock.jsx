import React,{ useState, useEffect } from 'react'
import './Clock.css';

const NEWS_YEARS_EVE = new Date(2022, 9, 31, 12, 0, 0);

const getTimedelta = () => {
const now = new Date();
const timedelta = NEWS_YEARS_EVE.getTime() - now.getTime();

const days = Math.floor(timedelta / (24 * 60 * 60 * 1000));
const hours = Math.floor((timedelta % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
const minutes = Math.floor((timedelta % (60 * 60 * 1000)) / (60 * 1000));
const seconds = Math.floor((timedelta % (60 * 1000)) / 1000);

 return {
    days,
    hours,
    minutes,
    seconds,
 };
};

function Clock() {
    const [countDown, setCountDown] = useState();
    const [loading, setLoading] = useState(true);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        const timedelta = getTimedelta();

        setCountDown(timedelta)
        setLoading(false)

        if(timedelta.seconds < 0) {
            setFinish(true)
        }

      }, 1000)

      return () => clearInterval(interval)
    },)
    
    if(loading) {
        return <h1>Loading...</h1>
    }

    if(finish) {
        return <h1></h1>
    }

  return (
    <nav className="clock-nav">
    <div className="centrar">
      <div className="clock-div">
        <span className='clock-big'>{countDown.seconds}</span>
        <span className='clock-small'>SEGUNDOS</span>
      </div>
      <div className="clock-div">
        <span className='clock-big'>{countDown.minutes}</span>
        <span className='clock-small'>MINUTOS</span>
      </div>
      <div className="clock-div">
        <span className='clock-big'>{countDown.hours}</span>
        <span className='clock-small'>HORAS</span>
      </div>
      <div className="clock-div">
        <span className='clock-big'>{countDown.days}</span>
        <span className='clock-small'>DÌAS</span>
      </div>
      <div className="clock-div-text">
        <span className='clock-big-text'>¡ESTA OFERTA DEL 30% DE DESCUENTO SE TERMINARA EN POCO TIEMPO!</span>
    </div>
    </div>
  </nav>
  )
}

export default Clock;