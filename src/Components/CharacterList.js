import React from "react";
import { CharacterCard } from "./CharacterCard";
import styled from "styled-components";

const CharacterList = ({ characters }) => {
  return (
    <CharacterListContainer>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </CharacterListContainer>
  );
};

export default CharacterList;

const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
