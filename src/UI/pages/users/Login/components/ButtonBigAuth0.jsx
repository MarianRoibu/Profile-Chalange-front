import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LoginButton = styled.button`
  background-color: #4c51bf;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #434190;
  }
`;


export default function ButtonBigAuth0({ text }) {
    const { loginWithRedirect } = useAuth0();
    return (
        <>
            <LoginButton onClick={loginWithRedirect}>{text}</LoginButton>
        </>
    )
}
