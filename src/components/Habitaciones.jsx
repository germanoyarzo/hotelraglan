import Carousel from "./Carousel";
import { useState, useEffect } from "react";

import image from '../images/doble.jpeg';
import image2 from '../images/doble_std_.jpg';
import image3 from '../images/doble_std_1.jpeg';
import image4 from '../images/doble_deluxe.jpg';
import image5 from '../images/triple2.jpeg';
import image6 from '../images/cuadruple.jpeg';
import image7 from '../images/hotel_std_1.jpeg';
import image8 from '../images/hotel_std_2.jpeg';
import image9 from '../images/std.png';
import image10 from '../images/habitacion-deluxe.jpg';
import image11 from '../images/habitacion-deluxe-2.jpg';
import image12 from '../images/doble-deluxe2.jpg';
import image13 from '../images/habitacion-deluxe.jpg';
import image14 from '../images/doble-standard.jpg';
import image15 from '../images/doble-standard2.jpg';
import image16 from '../images/doble-standard3.jpg';
import image17 from '../images/habitacion triple.jpg';
import image18 from '../images/habitacion-triple2.jpg';
import image19 from '../images/habitacion-doble-deluxe.jpg';
import '../css/Habitaciones.css';

const slides = [
  { src: image10, title: "" },
  { src: image11, title: "" },
  { src: image, title: "" },
  { src: image2, title: "" },
  { src: image3, title: "" },
  { src: image4, title: "" }, 
  { src: image5, title: "" },
  { src: image6, title: "" },
  { src: image7, title: "" },
  { src: image8, title: "" },
  { src: image9, title: "" },
  { src: image12, title: "" },
  { src: image13, title: "" },
  { src: image14, title: "" },
  { src: image15, title: "" },
  { src: image16, title: "" },
  { src: image17, title: "" },
  { src: image18, title: "" },
  { src: image19, title: "" },
];

function Habitaciones() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullSrc, setFullSrc] = useState(null);

  const openModal = (src) => {
    if (!src) return;
    setFullSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFullSrc(null);
  };

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
          </div>

          {/* Carrusel tal cual, solo le pasamos el callback */}
          <Carousel images={slides} onImageClick={openModal} />
        </div>
      </section>

      {/* Modal de imagen completa */}
      {isOpen && (
        <div className="imgmodal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="imgmodal-body" onClick={(e) => e.stopPropagation()}>
            <button className="imgmodal-close" onClick={closeModal} aria-label="Cerrar">×</button>
            <img src={fullSrc} alt="Imagen de habitación" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Habitaciones;
