import React, { useState, useContext } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Avatar, Button, Typography } from "@mui/material";
import { GoogleContext } from "../context/googleContext";
import axios from "axios";
import { Box } from "@mui/system";
import { deepOrange, deepPurple } from '@mui/material/colors';
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const { flag, userSariri, userGoogle } = useContext(GoogleContext);

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            Sariri
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li>
            <Link to="/hotels">Hoteles</Link>
          </li>
          <li>
            <Link to="/map">Mapa</Link>
          </li>
          <li>
            <Link to="/profile" >Perfil</Link>
          </li>
        </ul>
        {!flag ? 
        <Box sx={{ display: 'flex', alignItems:"center", justifyContent:"center", m: 2 }}>
        <Typography>{userSariri.user_name + " " + userSariri.user_lastName}</Typography>
        <Avatar alt={userSariri.user_name + " " + userSariri.user_lastName} sx={{ml: 1.5, bgcolor: '#023e8a'}}>
          {userSariri.user_name[0]}
        </Avatar>
        </Box>
        : <Button>Registrarse</Button>}
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      fontFamily: "Roboto", sans-serif;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        fontFamily: "Roboto", sans-serif;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
          fontFamily: "Roboto", sans-serif;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    fontFamily: "Roboto", sans-serif;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        fontFamily: "Roboto", sans-serif;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
          fontFamily: "Roboto", sans-serif;
        }
      }
    }
  }
`;
