import { useEffect } from 'react';
import { useNavigate } from 'react-router'
import styled from 'styled-components';
import Logo from "../assets/Logo.png";
import 'animate.css';


export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    figure img {
    filter: drop-shadow(0 0 5rem aqua);
    }
`;

const SplashScreen = () => {

    const navigate = useNavigate();

    const REDIRECT_DELAY = 2000; // 2 segundos


      useEffect(() => {
        const timer = setTimeout(() => {
          navigate("/Home");
        }, REDIRECT_DELAY);

        return () => clearTimeout(timer);
      }, []);  

    return (
        <>
            <Section>
                <figure>
                    <img className="animate__animated animate__zoomIn" src={Logo} alt="" />
                </figure>
            </Section>
        </>
    )
}

export default SplashScreen