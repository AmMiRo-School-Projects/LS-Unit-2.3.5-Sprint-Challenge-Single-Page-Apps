import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  padding: 1%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 5px 3px rgba(0, 0, 0, 0.22);
  margin: 2%;
  background-color: #f8d3ac;
  width: 250px;
`;

export default function LocationCard(props) {
  return (
    <CardDiv>
      <h2>{props.obj.name}</h2>
      <p>Type: {props.obj.type}</p>
      <p>Dimension: {props.obj.dimension}</p>
    </CardDiv>
  );
}
