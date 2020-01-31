import React from "react";
import styled from "styled-components";
import Image from "../assets/home.jpg";

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const HomeImg = styled.img`
  width: 50vw;
`;

export default function WelcomePage() {
  return (
    <HeaderSection className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <HomeImg className="main-img" src={Image} alt="rick" />
      </header>
    </HeaderSection>
  );
}
