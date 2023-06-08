import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Logout } from "../../../components/Logout";
import Navbar from "../../../components/Navbar/NavBar";


const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30vh;
`;

const ProfileImage = styled.img`
  z-index: 5;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  font-size: 18px;
  color: #333;
`;


const ProfilePage = () => {
  const user = useSelector((state) => state.user.data);

  
  return (
    <>
    <Navbar />
      <ProfileContainer>
        <ProfileImage src={user.img.secure_url} alt="Profile" />
        <ProfileDetails>
          <div>Email: {user.email}</div>
          <div>Name: {user.name}</div>
          <div>Username: {user.username}</div>
        </ProfileDetails>
        <Logout />
      </ProfileContainer>

    </>
  );
};

export { ProfilePage };