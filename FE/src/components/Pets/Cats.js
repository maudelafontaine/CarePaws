import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "../Loader";
import { AppContext } from "../Context";

const Cats = () => {
  // get all pets from Context
  const { pets } = useContext(AppContext);

  // filter pets by cat type
  const cats = pets.filter((pet) => {
    return pet.type === "cat";
  });

  if (cats.length === 0) {
    return <Loader />;
  }
  return (
    <Container>
      <Text>Find the perfect companion</Text>
      <CatsListContainer>
        {cats.map((c) => (
          <Cat key={c._id}>
            <NavigationLink to={`/pet/${c._id}`}>
              <CatContainer>
                <Picture src={c.picture} />
                <Name>{c.name}</Name>
                <Breed>{c.breed}</Breed>
              </CatContainer>
            </NavigationLink>
          </Cat>
        ))}
      </CatsListContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.h1`
  color: black;
  font-size: 26px;
  padding: 30px;
`;

const CatsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Cat = styled.div``;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

const CatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 400px;
  width: 400px;
  border-radius: 4px;
  /* border: 4px solid var(--green); */
`;

const Picture = styled.img`
  height: 60%;
  width: 60%;
  border-radius: 2px;
  margin-bottom: 20px;
  align-self: center;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Name = styled.h1`
  color: black;
  font-size: 18px;
  margin-bottom: 8px;
  margin-top: 15px;
`;

const Breed = styled.h2`
  color: black;
  font-size: 18px;
  font-weight: normal;
`;

export default Cats;
