import React, { useContext, useState } from "react";
import { AuthContext } from "../authProvider";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    await login(email, password);
    navigate("/");
  };
  const handleRegister = async () => {
    navigate("/register");
  };

  return (
    <LoginPageContainer>
      <LoginForm>
        <Input
          type="text"
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Iniciar sesión</Button>
        <Button onClick={handleRegister}>Registrarse</Button>{" "}
      </LoginForm>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  background-color: #0073e6;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
