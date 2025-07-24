import React from 'react';
import styled from 'styled-components';
import Square from '../components/SquareContainer'; 
import IconBox from './IconBox'; 
import image from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';
import image4 from '../images/4.jpeg';
import image5 from '../images/216.jpeg';
import image6 from '../images/309.jpeg';
import image7 from '../images/estacionamiento.jpg';
import image8 from '../images/salareunion.jpg';
import cocina from '../images/cocina.jpg';
import meetingroom from '../images/meetingroom.jpg';
import meetingroom2 from '../images/meetingroom2.jpg';
import sillones from '../images/sillones.jpg';
import recepcion from '../images/recepción.jpg';

const Container = styled.div`
  text-align: center;
  overflow-x: auto; /* Permite scroll horizontal */
  padding-top: 25px;
  background-color: #e0e0e0;

  @media (max-width: 768px) {
    background-color: #e0e0e0;
  }

  @media (max-width: 480px) {
    background-color: #d0d0d0;
  }
`;
const Content = styled.div`
  flex: 1; /* Ocupa el espacio restante */
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const slides = [
  { src: image, title: "Cowork" },
  { src: image2, title: "" },
  { src: image3, title: "" },
  { src: image4, title: "" },
  { src: cocina, title: "Cocina equipada" },
  { src: meetingroom, title: "Meeting room" },
  { src: meetingroom2, title: "Meeting room" },
  { src: sillones, title: "Relax" },
  { src: image5, title: "Oficinas privadas part-time" },
  { src: image6, title: "Oficinas privadas full time" },
  { src: image7, title: "Estacionamiento propio lindero" },
  { src: image8, title: "Sala de reunión para 12 personas." },
  { src: recepcion, title: "Recepción" }
];

//contenedor de imagenes
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; /* Espacio entre las imágenes */
  padding: 10px;
  width: 100%; /* Asegúrate de que el contenedor ocupe todo el ancho */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

function Services() {
  return (
    <section id="images">
      <Container>
      <Text>
          <h2>Conocé nuestras instalaciones</h2>
          <GridContainer>
            {slides.map((slide, index) => (
              <Square key={index} image={slide.src} title={slide.title} />
            ))}
          </GridContainer>
        </Text>
      </Container>
    </section>
  );
}

export default Services;
