import React from 'react';
import Carousel from "./Carousel";
import estacionamiento from '../images/estacionamiento.jpg';
import '../css/Estacionamiento.css';

const slides = [
  { src: estacionamiento, title: "estacionamiento" },
];

function Estacionamiento() {
  return (
    <div>
      <section id="estacionamiento">
          <div className="split-container-estacionamiento">
            <div className="left-side">
              <h1>Estacionamiento</h1>
              <p>
              Nuestra cochera cuenta con un sistema de acceso controlado por barreras, atención las 24 hs., los 365 dias del año y un sistema de vigilancia mediante cámaras en todos los pisos. Existen distintas modalidades de alquiler:
              Horario.
              Eventual (por día).
              Mensual de Invierno: desde el 1º de Marzo al 31 de Diciembre, para aquellos que requieren de una cochera, pero no la utilizan durante los meses de verano.
              Anual: todos los días del año, las 24 hs.
              Horario Comercial: todos los días del año, de 8 a 20 hs., para clientes que necesitan dejar su vehículo mientras trabajan.
              Moto.
              Box: en muchas ocasiones el cliente requiere de un espacio para guardar pertenencias y/o dejar su vehículo en una cochera bajo llave, donde solo el dueño tenga acceso.
              </p>
          </div>
           <Carousel images={slides} />
          </div>
      </section>
    </div>  
  );
}

export default Estacionamiento;
