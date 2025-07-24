import React from 'react';
import '../css/Ubicacion.css';
import logo from '../images/mapamila.png';

function Ubicacion() {
  return (
    <div>
      <section id="ubicacion">
          <div className="split-container-ubicacion">
            <div className="left-side">
              <h1>Ubicación</h1>
              <p>
                Nuestra sede se encuentra en Santiago del Estero 2151, Mar del Plata, Provincia de Buenos Aires. Pleno centro, a 4 cuadras de la peatonal y a 5 cuadras de la playa. Además contamos con una amplia red 
                de transporte público que te acerca a cualquier punto de la ciudad y entidades bancarias en las cercanias.
              </p>
          </div>
          <div className="right-side">
            <a href="https://www.google.com/maps/place/Santiago+del+Estero+2151,+Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.004246,-57.5507434,16.47z/data=!4m6!3m5!1s0x9584dc1c427410e5:0xcca5fac0c2d4c125!8m2!3d-38.0033762!4d-57.549062!16s%2Fg%2F11fxb5mxbk?entry=ttu" className="SquareLink">
              <img src={logo} alt="Logo" className="SquareImage" />
            </a>
          </div>
          </div>
      </section>
    </div>  
  );
}

export default Ubicacion;
