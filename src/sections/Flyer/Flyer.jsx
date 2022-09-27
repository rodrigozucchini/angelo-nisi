import React from 'react';
import './Flyer.css';
import Mockup from './../../assets/landing-principal.png';

const Flyer = () => {
  return (
    <div className='flyer'>
        <img className='flyer-img' src={Mockup} alt="mockup" />
    </div>
  )
}

export default Flyer;