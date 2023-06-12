import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Navbar from "../../../components/Navbar/NavBar";
import { MockContentManagement } from "./components/mockHomePage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  margin-top: 5vh;
  background-color: #ffffff;
`;

const Image = styled.img`
  width: 180vh;
  height: 70vh;
  object-fit: cover;
  border-radius: 5%;
  margin-bottom: 40px;
  opacity: 1;
  transition: opacity 0.5s ease;
  z-index: 1;
`;
const ScrollToTopButton = styled.button`
  width: 50px;
  height: 50px;
  margin-left: 50%;
  border-radius: 50%;
  background-color: #ffffff;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:before {
    content: "";
    display: inline-block;
    border-style: solid;
    border-width: 0.2em 0.2em 0 0;
    border-color: #333;
    transform: rotate(-225deg);
    width: 0.8em;
    height: 0.8em;
    position: relative;
    left: 5%;
    top: 10%;
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  &:hover:before {
    transform: rotate(-407deg);
  }
`;

const images = [
  "https://images.unsplash.com/photo-1551106369-98124034b1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1554058501-f6872d688003?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
  "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80",
  "https://images.unsplash.com/photo-1604928141064-207cea6f571f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80",
  "https://images.unsplash.com/photo-1493515322954-4fa727e97985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1504474298956-b1812fe43d92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1466354424719-343280fe118b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1555050551-82f8d95a0614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1466354424719-343280fe118b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
];

export function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(1); 
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Image
          src={images[currentIndex]}
          alt="Japan"
          style={{ opacity: opacity }}
        />   
      </Container>

      <MockContentManagement />
         <ScrollToTopButton onClick={handleScrollToTop} title="Scroll to Top">
          &nbsp;
        </ScrollToTopButton>
    </>
  );
}