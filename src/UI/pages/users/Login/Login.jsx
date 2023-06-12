import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled, { keyframes } from "styled-components";
import ButtonBigAuth0 from "./components/ButtonBigAuth0";



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url("https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2300&q=80");
  background-size: cover;
  background-position: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    navigate("/home");
    return null;
  }

  return (
    <Container>
      <ButtonBigAuth0 text="Login" />
    </Container>
  );
}

