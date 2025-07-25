import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Clientes from '../components/Clientes';
import Habitaciones from '../components/Habitaciones';
import Oficinas from '../components/Oficinas';
import Estacionamiento from '../components/Estacionamiento';
import SalaReuniones from '../components/SalaReuniones';
import Ubicacion from '../components/Ubicacion';
import ServiciosComunes from '../components/ServiciosComunes';

function Home() {
  const homeRef = useRef(null);
  const footerRef = useRef(null);
  const imagesRef = useRef(null);
  const clientesRef = useRef(null);
  const habitacionesRef = useRef(null);
  const oficinasRef = useRef(null);
  const estacionamientoRef = useRef(null);
  const salaReunionesRef = useRef(null);
  const ubicacionRef = useRef(null);
  const servicesRef = useRef(null);
  
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} imagesRef = {imagesRef} footerRef={footerRef} clientesRef ={clientesRef} habitacionesRef ={habitacionesRef} oficinasRef ={oficinasRef} estacionamientoRef={estacionamientoRef} salaReunionesRef={salaReunionesRef} ubicacionRef = {ubicacionRef} servicesRef = {ubicacionRef} />  
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/5492233555110?text=Hola,%20me%20gustaría%20obtener%20más%20información,%20valores%20y%20disponibilidad."
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <div ref={homeRef}>
        <Services />   
      </div>
      <div ref={habitacionesRef}>
        <Habitaciones />
      </div>
      {/* <div ref={oficinasRef}>
        <Oficinas />
      </div>
      <div ref={salaReunionesRef}>
        <SalaReuniones />
      </div>
      */}
      <div ref={servicesRef}>
        <ServiciosComunes />
      </div>
      {/* <div ref={estacionamientoRef}>
        <Estacionamiento />
      </div>  */}
      <div ref={ubicacionRef}>
        <Ubicacion />   
      </div>
      {/* <div ref={clientesRef}>
        <Clientes />   
      </div> */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
