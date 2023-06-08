import { useAuth0 } from '@auth0/auth0-react';

export default function ButtonBigAuth0({ text }) {
    const { loginWithRedirect } = useAuth0();
    return (
        <>
            <button onClick={loginWithRedirect}>{text}</button>
        </>
    )
}
