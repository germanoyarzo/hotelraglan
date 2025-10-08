import Carousel from "./Carousel";
import cocina from '../images/cocina.jpg';
import cocina2 from '../images/cocina2.jpeg';
import desayunador from '../images/desayunador.jpeg';
import desayuno from '../images/desayuno.jpg';
import lobby from '../images/lobby.jpg';
import pasillo from '../images/pasillo.jpeg';
import pasillomesa from '../images/pasillo-mesa.jpeg';
import patio from '../images/patio.png';
import quincho from '../images/quincho.jpeg';
import pationoche from '../images/patio-noche.jpeg';
import '../css/EspaciosComunes.css';

const slides = [
    { src: patio, title: "Patio" },
  { src: cocina, title: "Cocina" },
  { src: cocina2, title: "Cocina" },
  { src: desayunador, title: "Desayunador" },
  { src: desayuno, title: "Desayuno" },
  { src: lobby, title: "Lobby" },
  { src: pasillo, title: "Pasillo" },
  { src: pasillomesa, title: "Espacio de trabajo" },
  { src: quincho, title: "Quincho" },
  { src: pationoche, title: "Patio de noche" },
];

function EspaciosComunes() {
  return (
    <div>
      <section id="espacioscomunes">
         <div className="split-container">
          <div className="left-side">
            <h1>Espacios Comunes</h1>
              <p>El hotel cuenta con espacio de cocina para uso diario, quincho con parrilla a gas, 
                patio con un mural para disfrutar de las tardes. Además contamos con wifi en todos 
                nuestros espacios comunes para poder aprovechar al máximo tu estadía y/o trabajar de 
                forma cómoda. También tenemos la opción gratuita de un espacio de coworking para mayor 
                privacidad.</p>
          </div>
          <Carousel images={slides} />
        </div>
      </section>  
    </div>  
  );
}

export default EspaciosComunes;