import IconBox from './IconBox'; 
import Carousel from "./Carousel";
import { FaUsers,FaSnowflake  } from 'react-icons/fa';
import {  MdKitchen } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

import image from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';
import cocina from '../images/cocina.jpg';
import meetingroom from '../images/meetingroom.jpg';
import meetingroom2 from '../images/meetingroom2.jpg';
import sillones from '../images/sillones.jpg';
import coworkingmesa from '../images/coworkingmesa.jpg';
import fondocoworking from '../images/fondocoworking.jpg';
import '../css/Coworking.css';

const slides = [
  { src: coworkingmesa, title: "Coworking" },
  { src: image, title: "Coworking" },
  { src: image2, title: "" },
  { src: image3, title: "" },
  { src: fondocoworking, title: "Area de descanso" }, 
  { src: cocina, title: "Cocina equipada" },
  { src: meetingroom, title: "Sala de reunión para 4 personas" },
  { src: meetingroom2, title: "Sala de reunión para 4 personas" },
  { src: sillones, title: "Area de descanso" }
];

const services = [
  { icon: <MdKitchen />, title: "Cocina", description: "Equipada con pava eléctrica, microondas y heladera." }, 
  { icon: <FaSnowflake />, title: "Aire acondicionado", description: "Aire frío/calor y calefacción por gas" },
  { icon: <FaUsers />, title: "Capacidad", description: "Capacidad para 20 personas." },
  { icon: <IoCallSharp />, title: "Call rooms", description: "Cabinas para llamadas." }
];

function Coworking() {
  return (
    <div>
      <section id="coworking">
          <div className="split-container">
            <div className="left-side">
              <h1>Coworking</h1>
              <p>
                Espacio ideal para llevar a cabos tus ideas y poder realizar capacitaciones, reuniones, eventos, etc. Estamos abiertos 24/7 los 365 días.
              </p>
              <div className="grid-coworking">
                {services.map((service, index) => (
                  <IconBox key={index} icon={service.icon} title={service.title} description={service.description} />
                ))}
              </div>
          </div>
           <Carousel images={slides} />
          </div>
      </section>
    </div>  
  );
}

export default Coworking;
