import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider";

export default function LogoutPage() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    // Elimina el token de localStorage
    logout();

    // Redirige al usuario a la página principal
    navigate("/");
  }, [logout, navigate]);

  return (
    <div>
      <p>Cerrando sesión...</p>
    </div>
  );
}
