import './App.css';
import ButtonScroll from './sections/Button-scroll/ButtonScroll';
import Clock from './sections/Clock/Clock';
import Garantia  from './sections/Garantia/Garantia';
import Header from './sections/Header/Header.jsx';
import { Planes } from './sections/Planes/Planes';
import PreguntasFrecuentes from './sections/Preguntas/Preguntas-frecuentes';
import Storytelling from './sections/storytelling/Storytelling';
import CopyObj  from './sections/CopyObj/CopyObj';
import React, {useState, useEffect} from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import Modulos from './sections/Modulos/Modulo';
import Bonus from './sections/Bonus/Bonus';
import ButtonTest from './sections/Button-before-test/ButtonTest';
import ButtonStory from './sections/ButtonStory/ButtonStory';
import Whatsap from './sections/Whatsap/Whatsap';
import Footer from './sections/Footer/Footer';
import Testimonios from './sections/Testimonios/Testimonios';
import Wave from './sections/Wave/Wave';
import Wave2 from './sections/Wave2/Wave2';

function App() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])
  

  return (
    <div className="App">
      {
        loading 
        ? 
          (<div className="loader">
            <BounceLoader color="#508AD3" size={90} loading={loading} />
          </div>
          )
        :
          (
          <><Header />
          <Wave />
          <CopyObj />
          <Planes />
          <Storytelling />
          <Testimonios />
          <ButtonStory />
          <Wave />
          <Modulos />
          <Bonus />
          <ButtonTest />
          <Wave2 />
          <PreguntasFrecuentes />
          <Garantia />
          <Footer />
          <Clock />
          <ButtonScroll />
          <Whatsap />
          </>
          )
      }
    </div>
  );
}

export default App;
