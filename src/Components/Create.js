import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../authProvider";
import { useNavigate } from "react-router-dom/dist";
import Carousel from "../Common/Carousel";
import { imagesRoutes } from "../Utils/imagesRoutes";

export const Create = () => {
  const img = imagesRoutes;
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [characterData, setCharacterData] = useState({
    nombre: "",
    rostro: img.rostro[0].imageUrl,
    parteSuperior: img.parteSuperior[0].imageUrl,
    parteInferior: img.parteInferior[0].imageUrl,
    zapatos: img.zapatos[0].imageUrl,
  });

  const handleChange = (name, value) => {
    setCharacterData({
      ...characterData,
      [name]: img[name][value].imageUrl,
    });
  };

  const handleInput = (name, value) => {
    setCharacterData({
      ...characterData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Crea un objeto con los datos del personaje a guardar
    const characterToSave = {
      nombre: characterData.nombre,
      rostro: characterData.rostro,
      parteSuperior: characterData.parteSuperior,
      parteInferior: characterData.parteInferior,
      zapatos: characterData.zapatos,
    };

    try {
      const response = await fetch("http://localhost:5000/api/character", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Agrega el token a los encabezados
        },
        body: JSON.stringify(characterToSave),
      });

      if (response.ok) {
        // La solicitud se realizó con éxito, puedes manejar la respuesta aquí
        console.log("Personaje guardado exitosamente.");
        alert("Personaje guardado exitosamente.");
        navigate("/user");
        // Puedes realizar más acciones, como redireccionar o mostrar un mensaje de éxito
      } else {
        // La solicitud no fue exitosa, maneja el error (por ejemplo, mostrar un mensaje de error)
        console.error("Error al guardar el personaje.");
        alert("Error al guardar el personaje.");
      }
    } catch (error) {
      // Manejar errores de red o del servidor
      console.error("Error de red:", error);
    }
  };

  return (
    <CharacterFormContainer>
      <h2>Completa los datos del personaje:</h2>
      <form onSubmit={handleSubmit}>
        <FormInput>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={characterData.nombre}
            onChange={(e) => handleInput(e.target.name, e.target.value)}
          />
        </FormInput>
        <FormInput>
          <label>Rostro:</label>

          <Carousel
            images={imagesRoutes.rostro}
            selectValue={handleChange}
            name="rostro"
          />
        </FormInput>

        <FormInput>
          <label>Parte Superior:</label>
          <Carousel
            images={imagesRoutes.parteSuperior}
            selectValue={handleChange}
            name="parteSuperior"
          />
        </FormInput>

        <FormInput>
          <label>Parte Inferior:</label>

          <Carousel
            images={imagesRoutes.parteInferior}
            selectValue={handleChange}
            name="parteInferior"
          />
        </FormInput>
        <FormInput>
          <label>Zapatos:</label>

          <Carousel
            images={imagesRoutes.zapatos}
            selectValue={handleChange}
            name="zapatos"
          />
        </FormInput>

        <SubmitButton type="submit">Crear Personaje</SubmitButton>
      </form>
    </CharacterFormContainer>
  );
};

const CharacterFormContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormInput = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
  }

  input {
    padding: 5px;
  }
`;

const SubmitButton = styled.button`
  background-color: #0073e6;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    background-color: #005bbf;
  }
`;
