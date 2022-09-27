import React,{ useState,useEffect } from 'react';
import './Testimonios.css';
import Testimonio1 from './../../assets/testimonio1.png';
import Testimonio2 from './../../assets/testimonio2.png';
import Testimonio3 from './../../assets/testimonio3.png';
import Testimonio5 from './../../assets/testimonio4.png';
import Testimonio4 from './../../assets/wpp-testimonio1.jpeg';
import Testimonio6 from './../../assets/wp-testimonio6.jpeg';

const Testimonios = () => {
    const [testimonioColumn, setTestimonioColumn] = useState(window.innerWidth < 1300 ? false : true)

    const renderTestimonios = () => {
        if(window.innerWidth < 1300) setTestimonioColumn(false)
        else setTestimonioColumn(true)
    }

    useEffect(() => {
      renderTestimonios()
      window.addEventListener("resize", renderTestimonios)
      return () => window.removeEventListener("resize", renderTestimonios)
    }, [])
    

  return (
    <div className='div-testimonios'>
        <h1 className='title-testimonios'>Testimonios</h1>
    {
        testimonioColumn ? 
        ( 
            <>
                <div className='testimonios'>
                    <div>
                        <img src={Testimonio1} className="testimonio1-img" />
                </div>
                    <div>
                        <img src={Testimonio2} className="testimonio2-img" />
                </div>
                    <div>
                        <img src={Testimonio3} className="testimonio3-img" />
                    </div>
                </div>
                <div className='testimonios'>
                <div>
                        <img src={Testimonio4} className="testimonio4-img" />
                </div>
                <div>
                        <img src={Testimonio5} className="testimonio5-img" />
                </div>
                <div>
                        <img src={Testimonio6} className="testimonio6-img" />
                </div>
            </div>
    </>
    )
        :
    (
            <div className='testimonios'>
                <div>
                    <img src={Testimonio1} className="testimonio1-img" />
                </div>
                <div>
                    <img src={Testimonio2} className="testimonio2-img" />
                </div>
                <div>
                    <img src={Testimonio3} className="testimonio3-img" />
                </div>
                <div>
                    <img src={Testimonio5} className="testimonio5-img" />
                </div>
                <div>
                    <img src={Testimonio4} className="testimonio4-img" />
                </div>
                <div>
                    <img src={Testimonio6} className="testimonio6-img" />
                </div>
            </div>
    )
        }
    </div>
  )
}

export default Testimonios;