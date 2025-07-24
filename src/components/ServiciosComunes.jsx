import IconBox from './IconBox'; 
import { FaUsers, FaWifi, FaCar, FaRestroom } from 'react-icons/fa';
import { MdCleaningServices, MdPedalBike } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";
import { GiPadlock, GiFireplace, GiDesk } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import '../css/SalaReuniones.css';

const iconStyle = { fontSize: '1.5rem' }; // Ajusta este tamaño según tus necesidades

const services = [
    { icon: <FaWifi style={iconStyle} />, title: "Internet alta velocidad", description: "Wifi con una velocidad de 300 MB." },
    { icon: <MdCleaningServices />, title: "Limpieza", description: "Orden y limpieza de todos los espacios." },
    { icon: <FiPrinter />, title: "Impresoras", description: "Acceso al uso de impresora." },
    { icon: <FaUsers />, title: "Recepción", description: "Atención, recepción de visitas y correspondencia." },
    { icon: <FaCar />, title: "Estacionamiento", description: "Estacionamiento lindero por un costo adicional." },
    { icon: <MdPedalBike />, title: "Bicicletero", description: "Bicicletero para bicicletas y motos." },
    { icon: <GiPadlock />, title: "Lockers", description: "Lockers individuales para guardado de objetos." },
    { icon: <FaRestroom />, title: "Baño privado", description: "" },
    { icon: <GiFireplace />, title: "Calefacción", description: "Calefacción por gas." },
    { icon: <GiDesk />, title: "Muebles", description: "Equipadas con escritorios y sillas." },
    { icon: <IoLocation />, title: "Domicilio fiscal", description: "Domicilio legal y fiscal." }
];

function ServiciosComunes() {
  return (
    <div>
      <section id="servicioscomunes">
          <div className="split-container-sala">
            <div className="left-side">
              <h1>Servicios comunes</h1>
              <div className="grid-coworking">
                {services.map((service, index) => (
                  <IconBox key={index} icon={service.icon} title={service.title} description={service.description} />
                ))}
              </div>
          </div>
          </div>
      </section>
    </div>  
  );
}

export default ServiciosComunes;