import React, { useState } from "react";
import { getDecodedToken } from "./Utils/utils";

// 1. Configura la autenticación (puedes usar un contexto)
export const AuthContext = React.createContext();

// Componente de proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const getToken = () => {
    return localStorage.getItem("token");
  };

  const [user, setUser] = useState(getDecodedToken()?.user);
  const [token, setToken] = useState(getToken());
  const isAuthenticated = getDecodedToken()?.user;

  const login = async (email, password) => {
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // La solicitud se realizó con éxito, puedes manejar la respuesta aquí
        const responseData = await response.json();
        // También puedes almacenar el token en localStorage para persistencia
        localStorage.setItem("token", responseData);
        setToken(responseData);
        // Hacer algo con la respuesta, como almacenar el token en el estado
      } else {
        // La solicitud no fue exitosa, maneja el error (por ejemplo, mostrar un mensaje de error)
        console.error("Error al iniciar sesión");
      }
    } catch (error) {
      // Manejar errores de red o del servidor
      console.error("Error de red:", error);
    }
    let decodedToken = getDecodedToken();

    // Aquí implementa la lógica de inicio de sesión
    // Puedes realizar una solicitud a un servicio de autenticación o usar cookies, tokens, etc.
    setUser({ userName: decodedToken.user.userName });
  };

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  const register = async (email, user, password, fullName) => {
    const data = {
      email,
      fullName,
      password,
      userName: user,
      isActive: true,
    };
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        await login(email, password);
      } else {
        console.error("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, token, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
