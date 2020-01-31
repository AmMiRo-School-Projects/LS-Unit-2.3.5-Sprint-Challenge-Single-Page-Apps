import React, { useState } from "react";
import styled from "styled-components";

const SearchSection = styled.section`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 5px 3px rgba(0, 0, 0, 0.22);
  margin: 2%;
`;

export default function SearchForm(props) {
  const handleInputChange = e => {
    props.setQuery(e.target.value);
  };

  return (
    <SearchSection className="search-form">
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          value={props.query}
          name="name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </SearchSection>
  );
}
