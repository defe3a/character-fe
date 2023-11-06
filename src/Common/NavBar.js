import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../authProvider";
import { getDecodedToken } from "../Utils/utils";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  let decodedToken = getDecodedToken();
  let isAuthenticated = decodedToken;
  const location = useLocation();

  const { user } = useContext(AuthContext);

  return (
    <Nav>
      <div>
        <h1>Character creator</h1>
      </div>
      <NavList>
        <NavItem>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Inicio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/user"
            className={location.pathname === "/user" ? "active" : ""}
          >
            Mis personajes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/create"
            className={location.pathname === "/create" ? "active" : ""}
          >
            Crear personaje
          </NavLink>
        </NavItem>
      </NavList>
      {isAuthenticated ? (
        <li>
          Bienvenido, {user?.userName} <Link to="/logout">Cerrar sesión</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Iniciar sesión</Link>
        </li>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  .active: {
    background-color: #0073e6;
    color: #fff;
    font-weight: bold;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
