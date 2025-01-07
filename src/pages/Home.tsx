import React from "react";
import { Section } from "./SplashScreen";
import { styled } from "styled-components";

const style = {
  background:
    "radial-gradient(circle, rgba(0, 0, 33, 1) 2%, rgba(0, 80, 160, 1) 98%)",
  color: "white",
  fontFamily: "Arial",
  display: "grid",
  gap: "10px",
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
    background: aqua;
    border-radius: 50px;
    transition: all 1s;


    img {
      width: 90%;
      height: 90%;
      object-fit: cover;
      border-radius: 50px;
    }


    &:hover {
      background: blue;
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
        <li>
          <img
            src="https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/import/images/naruto02/221%EF%BD%9E300/221/C225_0060.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/import/images/naruto02/221%EF%BD%9E300/221/C225_0060.jpg"
            alt=""
          />
        </li>
      </UL>
    </Section>
  );
};

export default Home;
