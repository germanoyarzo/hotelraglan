import React from "react";
import '../css/Footer.css'; 

import {
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa';

import logo from '../images/mapamila.png';

const Footer = () => {
  return (
    <section id="footer" className="FooterContainer">
      <div className="Row">
        <div className="Column">
          <h3 className="Heading">Contacto</h3>
          <a href="mailto:hotelraglan@hotmail.com" className="FooterLink">
            <FaEnvelope /> hotelraglan@hotmail.com
          </a>
          <a href="https://wa.me/5492233555110" className="FooterLink">
            <FaWhatsapp /> +54 9 2233 55-5110
          </a>
          <a href="tel:+542234933730" className="FooterLink">
            <FaPhone /> 0223 4933730/ 0223 4956506
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Bolivar+2556,+Mar+del+Plata,+Provincia+de+Buenos+Aires" className="FooterLink">
            <FaMapMarkerAlt /> Bolivar 2556, Mar del Plata
          </a>
        </div>
        <div className="Column">
          <h3 className="Heading">Redes Sociales</h3>
          <a href="https://facebook.com/hotelraglan" className="FooterLink">
            <FaFacebookF />
            <span style={{ marginLeft: "10px" }}>Facebook</span>
          </a>
          <a href="https://www.instagram.com/hotelraglan/" className="FooterLink">
            <FaInstagram />
            <span style={{ marginLeft: "10px" }}>Instagram</span>
          </a>
        </div>
        {/* <div className="Column">
          <a href="https://www.google.com/maps/place/Santiago+del+Estero+2151,+Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.004246,-57.5507434,16.47z/data=!4m6!3m5!1s0x9584dc1c427410e5:0xcca5fac0c2d4c125!8m2!3d-38.0033762!4d-57.549062!16s%2Fg%2F11fxb5mxbk?entry=ttu" className="SquareLink">
            <img src={logo} alt="Logo" className="SquareImage" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
