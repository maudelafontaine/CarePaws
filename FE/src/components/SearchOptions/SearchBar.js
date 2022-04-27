// Search bar : search by breed
// To insert in cats.js, dogs.js, pets.js

import React, { useState } from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";
import { GoSearch } from "react-icons/go";

const SearchBar = ({ pets, results = 6 }) => {
  const [value, setValue] = useState("");

  const matchedSuggestions = pets
    .filter((pet) => {
      const characters = value.length >= 2;
      const includesValue = pet.breed
        .toLowerCase()
        .includes(value.toLocaleLowerCase());
      return characters && includesValue;
    })
    .slice(0, results);

  return (
    <Container>
      <TypeaheadContainer>
        <Input
          placeholder="Search by breed"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></Input>
        <Btn>
          <GoSearch />
        </Btn>
      </TypeaheadContainer>
      {matchedSuggestions.length !== 0 && (
        <List>
          {matchedSuggestions.map((suggestion) => {
            return (
              <Suggestion
                key={suggestion._id}
                suggestion={suggestion}
                // breed={suggestion.breed}
                value={value}
              ></Suggestion>
            );
          })}
        </List>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: block;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* height: 200px; */
`;

const TypeaheadContainer = styled.div`
  display: block;
  flex-direction: row;
  /* align-items: center;
  justify-content: center; */
`;

const Input = styled.input`
  width: 300px;
  border: none;
`;

const Btn = styled.button`
  color: black;
  padding: 8px;
  background-color: pink;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const List = styled.ul`
  background-color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 2px;
  /* height: 100%; */
`;

export default SearchBar;
