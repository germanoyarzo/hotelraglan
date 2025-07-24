import React from 'react';
import styled from 'styled-components';

const SquareContainer = styled.div`
  position: relative;
  width: 100%;  /* Ajusta el tamaño según sea necesario */
  padding-bottom: 100%; /* Mantén la proporción de aspecto cuadrada */
  overflow: hidden;
  margin: 10px; /* Ajusta el margen según sea necesario */
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  background: #008dd0; /* Fondo azul con opacidad */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

const Square = ({ image, title, description }) => {
  return (
    <SquareContainer>
      <Image src={image} alt={title} />
      <Overlay>
        <div>{title}</div>
        <Description>{description}</Description>
      </Overlay>
    </SquareContainer>
  );
};

export default Square;
