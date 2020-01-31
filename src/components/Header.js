import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MainNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`;

export default function Header() {
  return (
    <MainHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <MainNav>
        <Link className="nav-link" to="/">
          Welcome
        </Link>
        <Link className="nav-link" to="/characters">
          Characters
        </Link>
        <Link className="nav-link" to="/locations">
          Locations
        </Link>
      </MainNav>
    </MainHeader>
  );
}
