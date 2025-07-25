import React from 'react';
import '../css/Ubicacion.css';
import logo from '../images/mapahotel.jpg';

function Ubicacion() {
  return (
    <div>
      <section id="ubicacion">
          <div className="split-container-ubicacion">
            <div className="left-side">
              <h1>Ubicación</h1>
              <p>
                El Hotel Raglan se encuentra en Mar del Plata en pleno centro de la ciudad, a 500 metros de la playa y del casino y a 400 metros de la Peatonal San Martín.
              </p>
          </div>
          <div className="right-side">
            <a href="https://www.google.com/maps/place/Hotel+Raglan+Mar+del+Plata/data=!4m2!3m1!1s0x0:0x42ef410c8cfb188e?sa=X&ved=1t:2428&ictx=111" className="SquareLink">
              <img src={logo} alt="Logo" className="SquareImage" />
            </a>
          </div>
          </div>
      </section>
    </div>  
  );
}

export default Ubicacion;
