import React from "react";
import { Section } from "./SplashScreen";
import { styled } from "styled-components";
import { Link } from "react-router";

const style = {
  background:
    "radial-gradient(circle, rgba(0, 0, 33, 1) 2%, rgba(0, 80, 160, 1) 98%)",
  color: "white",
  fontFamily: "Arial",
  display: "grid",
  gap: "10px",
  justifyItems: "center",
};

const UL = styled.ul`
    display: flex;
    gap: 50px;
    height: 100%;
    padding: 0;
    justify-content: center;

  li {
    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 50px;
    transition: all 1s;


    p{
    margin:0;
    color: #000;
    font-weight: bold;
    }

    a {
    display: grid;
    justify-items: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    }

    img {
      width: 100%;
      height: 70%;
    }


    &:hover {
      background: #fdff97;
      scale: 1.2;
      cursor: pointer;
    }

  }
};`;

const Home = () => {
  return (
    <Section style={style}>
      <h1>UNIAJC TOUR</h1>
      <UL>
        <li className="animate__animated animate__zoomIn">
          <Link to="/Informacion">
          <img
            className="animate__animated animate__pulse"
            src="https://www.svgrepo.com/show/533059/camera.svg"
            alt=""
          />
          <p>Tour</p>
          </Link>
        </li>
        <li className="animate__animated animate__zoomIn">
          <Link to="/Informacion">
            <img
              className="animate__animated animate__pulse"
              src="https://www.svgrepo.com/show/533267/message-square-info.svg"
              alt=""
            />
          <p>Info</p>
          </Link>
        </li>
      </UL>
    </Section>
  );
};

export default Home;
