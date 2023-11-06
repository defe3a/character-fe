import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../authProvider";

export function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState("");
  const [fullName, setFullName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { register } = useContext(AuthContext);

  const checkDisable = () => {
    if (
      email.length > 0 &&
      password.length > 0 &&
      password === confirmPassword &&
      user.length > 0 &&
      fullName.length > 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const handleRegister = async () => {
    register(email, user, password, fullName);

    navigate("/");
  };

  return (
    <RegisterContainer>
      <h1>Registrarse</h1>
      <RegisterForm>
        <Input
          type="text"
          placeholder="Usuario"
          onChange={(e) => {
            setUser(e.target.value);
            checkDisable();
          }}
        />
        <Input
          type="text"
          placeholder="Correo electrónico"
          onChange={(e) => {
            setEmail(e.target.value);
            checkDisable();
          }}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
            checkDisable();
          }}
        />
        <Input
          type="password"
          placeholder="Repetir contraseña"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            checkDisable();
          }}
        />
        <Input
          type="text"
          placeholder="Nombre completo"
          onChange={(e) => {
            setFullName(e.target.value);
            checkDisable();
          }}
        />
        <Button onClick={handleRegister} disabled={isDisabled}>
          Registrarse
        </Button>
      </RegisterForm>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const RegisterForm = styled.form`
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
  &:disabled {
    background-color: #ccc; /* Cambia el color de fondo a un tono gris */
    color: #999; /* Cambia el color del texto a un tono más claro */
    cursor: not-allowed; /* Cambia el cursor a "no permitido" */
  }
`;
