import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Charactersdiv = styled.div`
display:flex;
flex-wrap: wrap;
justify-content; center;
align-items: center;
width: 100%;
`;

const CharactersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space around;
  align-items: center;
  margin: 3% auto;
  width: 100%;
`;

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        const characters = response.data.results.filter(obj =>
          obj.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      })
      .catch(err => {
        console.log("get error:", err);
      });
  }, [query]);

  return (
    <CharactersSection className="character-list">
      <SearchForm query={query} setQuery={setQuery} />
      <Charactersdiv>
        {data.map(obj => {
          return <CharacterCard obj={obj} />;
        })}
      </Charactersdiv>
    </CharactersSection>
  );
}
