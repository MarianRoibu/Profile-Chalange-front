import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { store } from "../../../utils/store";
import { useSelector } from "react-redux";


const Button = styled.button`
  background-color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  
`;

const ProfileButton = () => {
  const user = useSelector((state) => state.user.data);
  console.log(user);
  if (!user || !user.img) {
    return (
      <>
        <Link to="/profile">
          <Button>Profile</Button>
        </Link>
      </>
    );
  }

  return (
    <Link to="/profile">
      <ProfileImage src={user.img.secure_url} alt="Profile" />
    </Link>
  );
};

export default ProfileButton;