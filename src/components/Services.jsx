import React, { useState } from 'react';
import logohotel from '../images/logohotel.jpg';
import '../css/Services.css';

const scrollToSection = () => {
  const ubicacionSection = document.getElementById('ubicacion');
  ubicacionSection.scrollIntoView({ behavior: 'smooth' });
};
function Services() {
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState(1);

  const formatearFechaCorta = (fechaIso) => {
    const [anio, mes, dia] = fechaIso.split('-');
    return `${dia}/${mes}/${anio.slice(-2)}`;
  };

  const consultarPorWhatsApp = () => {
    if (!fechaEntrada || !fechaSalida || !cantidadPersonas || fechaSalida < fechaEntrada) {
      return;
    }

    const fechaEntradaFormateada = formatearFechaCorta(fechaEntrada);
    const fechaSalidaFormateada = formatearFechaCorta(fechaSalida);

    const mensaje = `Hola, quiero consultar disponibilidad para el Hotel Raglan.%0A` +
      `Fecha de entrada: ${fechaEntradaFormateada}%0A` +
      `Fecha de salida: ${fechaSalidaFormateada}%0A` +
      `Cantidad de personas: ${cantidadPersonas}`;

    window.open(`https://wa.me/5492233555110?text=${mensaje}`, '_blank', 'noopener,noreferrer');
  };

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
              <div className="consulta-container">
                <h3>Consultá tu estadía</h3>
                <div className="consulta-grid">
                  <label htmlFor="fechaEntrada">Fecha de entrada</label>
                  <input
                    id="fechaEntrada"
                    type="date"
                    value={fechaEntrada}
                    onChange={(e) => setFechaEntrada(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />

                  <label htmlFor="fechaSalida">Fecha de salida</label>
                  <input
                    id="fechaSalida"
                    type="date"
                    value={fechaSalida}
                    onChange={(e) => setFechaSalida(e.target.value)}
                    min={fechaEntrada || new Date().toISOString().split('T')[0]}
                  />

                  <label htmlFor="cantidadPersonas">Cantidad de personas</label>
                  <input
                    id="cantidadPersonas"
                    type="number"
                    min="1"
                    max="12"
                    value={cantidadPersonas}
                    onChange={(e) => setCantidadPersonas(e.target.value)}
                  />
                </div>
                <button
                  className="blue-button consultar-button"
                  onClick={consultarPorWhatsApp}
                  disabled={!fechaEntrada || !fechaSalida || !cantidadPersonas || fechaSalida < fechaEntrada}
                >
                  Consultar
                </button>
              </div>
              <br />
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
