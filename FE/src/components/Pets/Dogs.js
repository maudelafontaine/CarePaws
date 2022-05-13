import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiBone } from "react-icons/bi";

import Loader from "../Loader";
import { AppContext } from "../Context";

const Dogs = () => {
  // get all pets from Context
  const { pets } = useContext(AppContext);

  // filter pets by dog type
  const dogs = pets.filter((pet) => {
    return pet.type === "dog";
  });

  if (dogs.length === 0) {
    return <Loader />;
  }
  return (
    <Container>
      <Text>
        Find the perfect dog
        <BiBone
          size={28}
          style={{
            marginBottom: "-5px",
            // backgroundColor: "white",
            paddingLeft: "4px",
          }}
        />
      </Text>

      <DogsListContainer>
        {dogs.map((d) => (
          <Dog key={d._id}>
            <NavigationLink to={`/pet/${d._id}`}>
              <DogContainer>
                <Picture src={d.picture} />
                <Name>{d.name}</Name>
                <Breed>{d.breed}</Breed>
              </DogContainer>
            </NavigationLink>
          </Dog>
        ))}
      </DogsListContainer>
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
  font-size: 28px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--mint);
  border-radius: 20px;
`;

const DogsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 30px;
`;

const Dog = styled.div``;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

const DogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 90%;
  width: 90%;
  border-radius: 4px;
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
  font-size: 24px;
  margin-bottom: 8px;
  margin-top: 15px;
`;

const Breed = styled.h2`
  color: black;
  font-size: 20px;
  font-weight: normal;
`;

export default Dogs;
