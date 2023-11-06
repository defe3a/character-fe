import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../authProvider";

export default function SecurePage(props) {
  console.log("Esyo es, ", props);
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    // Contenido del panel de control
    <Navigate to={props.path} />
  ) : (
    // Redirige a la página de inicio de sesión si no está autenticado
    <Navigate to="/login" />
  );
}
