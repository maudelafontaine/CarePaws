import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const Dogs = () => {
  const [pets, setPets] = useState([]);

  // get all pets
  useEffect(() => {
    const getPets = async () => {
      const res = await fetch("/pets");
      const data = await res.json();
      setPets(data.data);
    };
    getPets();
  }, []);

  // filter pets by dog type
  const dogs = pets.filter((pet) => {
    return pet.type === "dog";
  });

  if (dogs.length === 0) {
    return <Loader />;
  }
  return (
    <Container>
      <Text>Adopt a dog</Text>
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
  background-color: #ffe6f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.h1`
  color: black;
  font-size: 25px;
`;

const DogsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
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
`;

const Picture = styled.img`
  height: 60%;
  width: 60%;
  /* height: 350px;
  width: 350px; */
  border-radius: 2px;
  margin-bottom: 20px;
  align-self: center;
  border: 3px solid #ffe6e6;

  &:hover {
    transform: scale(1.2);
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

export default Dogs;
