import React, { useState } from 'react';
import BurguerButton from './BurguerButton.jsx';
import LogoRaglan from '../images/logohotel.jpg';
import '../css/Navbar.css'; 

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="navbar">
        {!clicked && (
          <div className="logo-container">
            {/* <img src={LogoRaglan} alt="Logo" className="logo" /> */}
            <h2> Hotel<span> Raglan</span></h2>
          </div>
        )}
        <div className={`links ${clicked ? 'active' : ''}`}>
          {clicked ? (
            <div style={{ color: 'red' }}>
              <a href="#services">Inicio</a>
              <a href="#habitaciones">Habitaciones</a>
              <a href="#servicioscomunes">Servicios comunes</a>
              <a href="#ubicacion">Ubicación</a>
              {/* <a href="#clientes">Clientes</a> */}
              <a href="#footer">Contacto</a>
            </div>
          ) : (
            <>
              <a href="#services">Inicio</a>
              <a href="#habitaciones">Habitaciones</a>
              <a href="#servicioscomunes">Servicios comunes</a>
              <a href="#ubicacion">Ubicación</a>
              {/* <a href="#clientes">Clientes</a> */}
              <a href="#footer">Contacto</a>
            </>
          )}
        </div>

        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`bg-div ${clicked ? 'active' : ''}`}></div>
      </nav>
    </>
  );
}

export default Navbar;
