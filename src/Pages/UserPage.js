import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../authProvider";
import User from "../Components/User";

export default function UserPage(props) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    // Contenido del panel de control
    <User />
  ) : (
    // Redirige a la página de inicio de sesión si no está autenticado
    <Navigate to="/login" />
  );
}
