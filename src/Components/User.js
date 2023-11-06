import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider";
import CharacterList from "./CharacterList";

export default function User(props) {
  const [data, setData] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    // Hacer una llamada a la API local aquí
    fetch("http://localhost:5000/api/character/byUser", {
      headers: {
        Authorization: `Bearer ${token}`, // Agrega el token a los encabezados
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, [token]);

  return (
    <div>
      <h1>Mis personajes</h1>
      <CharacterList characters={data} />
    </div>
  );
}
