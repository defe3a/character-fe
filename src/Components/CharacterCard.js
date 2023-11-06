import React from "react";
import styled from "styled-components";

export const CharacterCard = ({ character }) => {
  return (
    <CardContainer>
      <CharacterImage src={character.rostro} alt={character.rostro} />
      <CharacterImage
        src={character.parteSuperior}
        alt="Parte superior del personaje"
      />
      <CharacterImage
        src={character.parteInferior}
        alt="Parte inferior del personaje"
      />
      <CharacterImage src={character.zapatos} alt="Zapatos del personaje" />
      <CharacterName>{character.nombre}</CharacterName>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: calc(25% - 16px); /* 33.33% para mostrar 3 tarjetas en una fila */
  margin: 8px; /* Espacio entre las tarjetas */
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const CharacterImage = styled.img`
  max-width: 100%; /* Ajusta el ancho de la imagen al tamaño de la tarjeta */
  height: auto;
  display: block;
  margin: 0 auto;
`;

const CharacterName = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  color: #333;
`;

export default CharacterCard;
