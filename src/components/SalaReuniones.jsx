import React from 'react';
import IconBox from './IconBox'; 
import Carousel from "./Carousel";
import { FaRegClipboard,FaSnowflake } from 'react-icons/fa';
import sala from '../images/salareunion.jpg';
import sala2 from '../images/salareunion2.jpg';
import '../css/SalaReuniones.css';

const slides = [
  { src: sala, title: "Sala de reunión para 12 personas" },
  { src: sala2, title: "Sala de reunión para 12 personas" },
];

const services = [
  { icon: <FaRegClipboard  />, title: "Pizarra", description: "" },
  { icon: <FaSnowflake />, title: "Aire acondicionado", description: "Aire frío/calor." }
];

function SalaReuniones() {
  return (
    <div>
      <section id="sala">
          <div className="split-container-sala">
            <div className="left-side">
              <h1>Sala de reuniones</h1>
              <p>
                Espacio de trabajo para eventos y/o reuniones con capacidad para 12 personas. 
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

export default SalaReuniones;
