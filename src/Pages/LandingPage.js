import React, { useEffect, useState } from "react";
import CharacterList from "../Components/CharacterList";

export default function LandingPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Hacer una llamada a la API local aquí
    fetch("http://localhost:5000/api/character/lasts?size=5")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Personajes</h1>
      <CharacterList characters={data} />
    </div>
  );
}
