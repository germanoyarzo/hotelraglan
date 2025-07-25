import IconBox from './IconBox'; 
import Carousel from "./Carousel";
import { FaUsers,FaSnowflake  } from 'react-icons/fa';
import {  MdBathroom,MdBreakfastDining } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

import image from '../images/doble.jpeg';
import image2 from '../images/doble_std_.jpg';
import image3 from '../images/doble_std_1.jpeg';
import image4 from '../images/doble_deluxe.jpg';
import image5 from '../images/triple2.jpeg';
import image6 from '../images/cuadruple.jpeg';
import image7 from '../images/hotel_std_1.jpeg';
import image8 from '../images/hotel_std_2.jpeg';
import image9 from '../images/std.png';
import '../css/Habitaciones.css';

const slides = [
  { src: image, title: "" },
  { src: image2, title: "" },
  { src: image3, title: "" },
  { src: image4, title: "" }, 
  { src: image5, title: "" },
  { src: image6, title: "" },
  { src: image7, title: "" },
  { src: image8, title: "" },
  { src: image9, title: "" }
];

const services = [
  { icon: <MdBathroom />, title: "Baño privado", description: "Todas las habitaciones cuentan con baño privado." }, 
  { icon: <MdBreakfastDining />, title: "Desayuno", description: "Incluido en la tarifa." },
  { icon: <FaUsers />, title: "Capacidad", description: "Capacidad para 20 personas." },
  { icon: <IoCallSharp />, title: "Call rooms", description: "Cabinas para llamadas." }
];

function Habitaciones() {
  return (
    <div>
      <section id="habitaciones">
          <div className="split-container">
            <div className="left-side">
              <h1>Habitaciones</h1>
              <p>
                Todas las habitaciones cuentan con baño privado, wifi, desayuno y servicio de limpieza.
                Existen habitaciones singles, dobles, triples, cuadruples y apartamentos.
                Las habitaciones deluxe incluyen además ventilador y TV por cable. Los apartamentos cuentan 
                con microondas y heladera. 
              </p>
              {/* <div className="grid-coworking">
                {services.map((service, index) => (
                  <IconBox key={index} icon={service.icon} title={service.title} description={service.description} />
                ))}
              </div> */}
          </div>
           <Carousel images={slides} />
          </div>
      </section>
    </div>  
  );
}

export default Habitaciones;
