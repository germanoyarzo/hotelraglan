import IconBox from './IconBox'; 
import { FaUsers, FaWifi, FaCar, FaRestroom, FaSuitcase } from 'react-icons/fa';
import { MdCleaningServices, MdFreeBreakfast, MdKitchen } from "react-icons/md";
import { GiBarbecue  } from "react-icons/gi";
import '../css/SalaReuniones.css';

const iconStyle = { fontSize: '1.5rem' }; // Ajusta este tamaño según tus necesidades

const services = [
    { icon: <FaWifi style={iconStyle} />, title: "Internet alta velocidad", description: "Wifi en habitaciones y espacios comunes." },
    { icon: <MdCleaningServices />, title: "Limpieza", description: "Orden y limpieza de todos los espacios." },
    { icon: <FaUsers />, title: "Recepción", description: "Recepción las 24hs." },
    { icon: <FaCar />, title: "Estacionamiento", description: "Estacionamiento lindero por un costo adicional." },
    { icon: <FaRestroom />, title: "Baño privado", description: "Todas las habitaciones cuentan con baño privado." },
    { icon: <MdFreeBreakfast />, title: "Desayuno incluido", description: "Desayuno incluido en la tarifa." },
    { icon: <MdKitchen style={iconStyle} />, title: "Cocina de uso común", description: "Equipada con heladera, microondas y hornallas para uso de los huéspedes." },
    { icon: <GiBarbecue style={iconStyle} />, title: "Parrilla", description: "Parrilla a gas disponible para uso de los huéspedes sin cargo." },
    { icon: <FaSuitcase style={iconStyle} />, title: "Espacio de guardado", description: "Baulera disponible para guardar bolsos y valijas." },

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