import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import EpisodeCard from "./EpisodeCard";
import styled from "styled-components";

const EpisodesDiv = styled.div`
display:flex;
flex-wrap: wrap;
justify-content; center;
align-items: center;
width: 100%;
`;

const EpisodesSection = styled.section`
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
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        console.log(response);
        const episodes = response.data.results.filter(obj =>
          obj.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(episodes);
      })
      .catch(err => {
        console.log("get error:", err);
      });
  }, [query]);

  return (
    <EpisodesSection className="character-list">
      <SearchForm query={query} setQuery={setQuery} />
      <EpisodesDiv>
        {data.map(obj => {
          return <EpisodeCard obj={obj} key={obj.name} />;
        })}
      </EpisodesDiv>
    </EpisodesSection>
  );
}
