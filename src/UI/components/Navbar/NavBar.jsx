import React from "react";
import styled from "styled-components";
import { useAuth0 } from '@auth0/auth0-react';
import ProfileButton from "../profilePicture/profilePicture";
import { store } from "../../../utils/store";
import { useSelector } from "react-redux";
import { GlobalStyle } from "../../pages/users/Styles/Users/config";



const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d3d6db; 
  height: 50px; 
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  margin-left: 4vh;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin-top: 0;
  
  @media (max-width: 768px) {
    margin-top: 5vh;
    & > :first-child {
      margin-right: -15vh;
    }
  }

  & > :last-child {
    margin-top: 0.2vh;
    margin-right: 2vh;
  }
`;

const NavLink = styled.li`
  font-size: 1.5rem;
  margin-right: 2vh;
  &:first-child {
    margin-right: 20vh;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
    position: relative;

    &:hover {
      color: #dcddde;
    }
  }
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #9147ff;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 480px) {
    max-height: 5vh;
    margin-right: 7.4vh;
  }

  &:hover {
    background-color: #7339b2;
  }
`;

const AuthButtons = styled.div`
  display: flex;
`;

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const user = useSelector((state) => state.user.data);

  console.log(user);

  return (
    <>
    <GlobalStyle />
    <NavbarContainer>
      <Logo href="/home">Home</Logo>
      <NavLinks>
        {!isAuthenticated ? (
          <AuthButtons>
            <Button onClick={loginWithRedirect}>Login</Button>
          </AuthButtons>
        ) : (
          <>
            <NavLink>
              <ProfileButton />
            </NavLink>
          </>
        )}
      </NavLinks>
    </NavbarContainer>
    </>
  );
};

export default Navbar;