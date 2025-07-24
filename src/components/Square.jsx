import React from 'react';
import styled from 'styled-components';

const RectangleContainer = styled.div`
  position: relative;
  width: 150%;
  padding-top: 60%; /* Proporción para mantener el aspecto rectangular */
  border-radius: 10px; /* Bordes redondeados */
  overflow: hidden;
`;

const ImageLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta la imagen para cubrir todo el contenedor */
`;

const Square = ({ image, title, url }) => (
  <RectangleContainer>
    <ImageLink href={url} target="_blank" rel="noopener noreferrer">
      <Image src={image} alt={title} />
    </ImageLink>
  </RectangleContainer>
);

export default Square;
