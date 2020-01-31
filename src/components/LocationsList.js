import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import LocationCard from "./LocationCard";
import styled from "styled-components";

const Locationsdiv = styled.div`
display:flex;
flex-wrap: wrap;
justify-content; space-between;
align-items: stretch;
`;

const LocationsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space around;
  align-items: center;
  margin: 3% auto;
`;

export default function LocationsList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        console.log(response);
        const Locations = response.data.results.filter(obj =>
          obj.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(Locations);
      })
      .catch(err => {
        console.log("get error:", err);
      });
  }, [query]);

  return (
    <LocationsSection className="character-list">
      <SearchForm query={query} setQuery={setQuery} />
      <Locationsdiv>
        {data.map(obj => {
          return <LocationCard obj={obj} />;
        })}
      </Locationsdiv>
    </LocationsSection>
  );
}
