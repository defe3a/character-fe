import React from "react";
import styled from "styled-components";

export default function NoPage(props) {
  return (
    <ErrorPage>
      <ErrorMessage>Página no encontrada</ErrorMessage>
      <p>La página que estás buscando no existe.</p>
    </ErrorPage>
  );
}

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const ErrorMessage = styled.h1`
  font-size: 24px;
  color: #ff0000;
  margin-bottom: 16px;
`;
