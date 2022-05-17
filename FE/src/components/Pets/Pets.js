// list of all pets

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Loader from "../Loader";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // get all pets
  useEffect(() => {
    const findPets = async () => {
      const res = await fetch("/pets");
      const data = await res.json();

      setPets(data.data);
      setIsLoading(false);
    };
    findPets();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Text>
        Find the perfect companion
        <FaHeart
          size={26}
          style={{
            marginBottom: "-5px",
            paddingLeft: "5px",
          }}
        />
      </Text>
      <PetsListContainer>
        {pets.map((p) => (
          <Pet key={p._id}>
            <NavigationLink to={`/pet/${p._id}`}>
              <PetContainer>
                <Picture src={p.picture} />
                <Name>{p.name}</Name>
                <Breed>{p.breed}</Breed>
              </PetContainer>
            </NavigationLink>
          </Pet>
        ))}
      </PetsListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: var(--grey);
`;

const Text = styled.h2`
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

const PetsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 30px;
`;

const Pet = styled.div``;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

const PetContainer = styled.div`
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
    transform: scale(1.2);
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

export default Pets;
