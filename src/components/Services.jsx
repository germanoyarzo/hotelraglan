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
                El Hotel Raglan se encuentra en Mar del Plata en pleno centro de la ciudad, a 500 metros de la playa y del casino y a 400 metros de la Peatonal San Martin.
                El Hotel Raglan ofrece aparcamiento cerca del hotel por un suplemento. 
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
