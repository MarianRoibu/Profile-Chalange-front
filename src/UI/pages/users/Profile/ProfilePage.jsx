import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Logout } from "../../../components/Logout";
import Navbar from "../../../components/Navbar/NavBar";


const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  height: 100vh;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  background: #f2f2f2;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  z-index: 5;
  height: 200px;
  border-radius: 50%;
  width: 200px;
  border: 8px solid #dcdddd;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  font-size: 18px;
  color: #333333;
`;

const ContainerTitleSettings = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

const TitleSetting = styled.span`
  &:after {
    content: "→";
    margin-left: 5px;
    font-size: 18px;
    color: #000000;
  }
`;

const Data = styled.div`
  color: black;
`

const ProfilePage = () => {
  const user = useSelector((state) => state.user.data);

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
          }
        `}
      </style>
      <Container>
        <Navbar />
        <ProfileContainer>
          <ProfileImage src={user.img.secure_url} alt="Profile" />
          <ProfileDetails>
            <Data>Email: {user.email}</Data>
            <Data>Name: {user.name}</Data>
            <Data>Username: {user.username}</Data>
          </ProfileDetails>
          <Logout />
          <ContainerTitleSettings>
            <Link to={`/edit`}>
              <Data>Edit user</Data>
            </Link>
            <TitleSetting>{">"}</TitleSetting>
          </ContainerTitleSettings>
        </ProfileContainer>
      </Container>
    </>
  );
};

export { ProfilePage };