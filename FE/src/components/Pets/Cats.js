import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "../Loader";

const Cats = () => {
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

  // filter pets by cat type
  const cats = pets.filter((pet) => {
    return pet.type === "cat";
  });
  // console.log(cats);

  if (cats.length === 0) {
    return <Loader />;
  }
  return (
    <Container>
      <Text>Adopt a cat</Text>
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
  /* width: 90%; */
`;

const Picture = styled.img`
  height: 70%;
  width: 70%;

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

export default Cats;
