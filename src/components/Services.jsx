import React from 'react';
import logohotel from '../images/logohotel.jpg';
import '../css/Services.css';

const scrollToSection = () => {
  const ubicacionSection = document.getElementById('ubicacion');
  ubicacionSection.scrollIntoView({ behavior: 'smooth' });
};
function Services() {
  return (
    <div>
      <section id="services">
          <div className="split-container-services">
            <div className="left-side">
              <p>
                El Hotel Raglan se encuentra en Mar del Plata en pleno centro de la ciudad. Las habitaciones y apartamentos presentan un estilo sencillo y tradicional, 
                cuentan con wifi, desayuno, baño privado, mientras que algunos cuentan con ventilador y televisión por cable. 
                El Hotel Raglan dispone de jardín y recepción 24 horas, así como cocina compartida. 
                Además, hay una zona de comedor al aire libre con barbacoa de gas de uso gratuito. 
                También se ofrece servicio de habitaciones y consigna de equipaje.
                El Hotel Raglan ofrece aparcamiento lindero al hotel por un suplemento.
              </p>
              <br/>               
              <button className="blue-button" onClick={scrollToSection}>Ubicación</button>
            </div>
            <div className="right-side">
              <img src={logohotel} alt="Mila Logo" />
            </div>
          </div>
      </section>
    </div>  
  );
}

export default Services;
