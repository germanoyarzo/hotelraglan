import React from 'react';
import styled from 'styled-components';

const IconBoxWrapper = styled.div`
  flex: 1 1 calc(33.33% - 300px); /* Ancho del 33.33% menos el margen */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: var(--surface);
  border: 1px solid rgba(148, 163, 184, 0.3);
  border-radius: 18px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.3s ease-in-out;
  margin: 10px; /* Ajuste del margen entre los cuadros */

  &:hover {
    transform: translateY(-6px);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px); /* Ancho del 50% menos el margen */
  }

  @media (max-width: 480px) {
    flex: 1 1 calc(100% - 20px); /* Ancho del 100% menos el margen */
  }
`;

const IconBoxIcon = styled.div`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 10px;
`;

const IconBoxTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--text);
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const IconBoxDescription = styled.p`
  font-size: 1rem;
  color: var(--muted);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const IconBox = ({ icon, title, description }) => {
  return (
    <IconBoxWrapper>
      <IconBoxIcon>{icon}</IconBoxIcon>
      <IconBoxTitle>{title}</IconBoxTitle>
      <IconBoxDescription>{description}</IconBoxDescription>
    </IconBoxWrapper>
  );
};

export default IconBox;
