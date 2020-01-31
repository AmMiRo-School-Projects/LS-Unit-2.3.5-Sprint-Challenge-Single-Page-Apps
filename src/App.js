import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
import styled from "styled-components";

const AppMain = styled.main`
  background-color: #e8dbce;
`;

export default function App() {
  return (
    <AppMain>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
      <Route path="/locations">
        <LocationsList />
      </Route>
      <Route path="/episodes">
        <EpisodeList />
      </Route>
    </AppMain>
  );
}
