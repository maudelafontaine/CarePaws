import React from "react";
import styled from "styled-components";

const Suggestion = ({ suggestion, value }) => {
  const match = suggestion.breed.toLowerCase();
  const firstHalf = suggestion.breed.slice(0, match);
  const secondHalf = suggestion.breed.slice(match);

  return (
    <Title>
      <span>
        {firstHalf}
        <Prediction>{secondHalf}</Prediction>
      </span>
    </Title>
  );
};

const Title = styled.li`
  color: black;
  font-size: 12px;
  /* padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 8px;
  padding-left: 8px; */
  text-decoration: none;

  &:hover {
    background-color: #ffffe6;
  }
`;

const Prediction = styled.span`
  font-weight: bold;
`;

export default Suggestion;
