import React, { useContext } from "react";
import { AuthContext } from "../authProvider";
import { Navigate } from "react-router-dom/dist";
import { Create } from "../Components/Create";

export default function CreatePage(props) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    // Contenido del panel de control
    <Create />
  ) : (
    // Redirige a la página de inicio de sesión si no está autenticado
    <Navigate to="/login" />
  );
}
