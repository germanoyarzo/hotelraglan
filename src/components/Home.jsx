import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Habitaciones from '../components/Habitaciones';
import EspaciosComunes from './EspaciosComunes';
import Ubicacion from '../components/Ubicacion';
import ServiciosComunes from '../components/ServiciosComunes';
import Tarifas from '../components/Tarifas';

function Home() {
  const homeRef = useRef(null);
  const footerRef = useRef(null);
  const imagesRef = useRef(null);
  const clientesRef = useRef(null);
  const habitacionesRef = useRef(null);
  const oficinasRef = useRef(null);
  const ubicacionRef = useRef(null);
  const servicesRef = useRef(null);
  const tarifasRef = useRef(null);
  
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} imagesRef = {imagesRef} footerRef={footerRef} clientesRef ={clientesRef} habitacionesRef ={habitacionesRef} ubicacionRef = {ubicacionRef} servicesRef = {ubicacionRef} tarifasRef = {tarifasRef} />  
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
      <div ref={oficinasRef}>
        <EspaciosComunes />
      </div>
      <div ref={tarifasRef}>
        <Tarifas />
      </div>
      <div ref={servicesRef}>
        <ServiciosComunes />
      </div>
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
