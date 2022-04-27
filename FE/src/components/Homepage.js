import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
import { FaPaw } from "react-icons/fa";
// import { useEffect, useState } from "react";

const Homepage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  if (!isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Bg src="/images/bg.jpg" />
      <TextContainer>
        <Text>Find your new bestfriend</Text>
        <Text style={{ fontSize: "22px", padding: "20px" }}>
          Select a category to get started.
        </Text>
      </TextContainer>
      <TypesContainer>
        <Type>
          <TypeLink to="/pets/type/cat">
            <Icon src="images/cat_icon.png" />
            Cats
          </TypeLink>
        </Type>
        <Type>
          <TypeLink to="/pets/type/dog">
            <Icon src="images/dog_icon.png" />
            Dogs
          </TypeLink>
        </Type>
        <Type>
          <TypeLink to="/pets">
            <Icon src="images/shelter_icon.png" />
            All Pets
          </TypeLink>
        </Type>
      </TypesContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 800px;
  background-color: var(--grey);
`;

const Bg = styled.img`
  /* margin-top: 50px; */
  width: 50%;
  height: 50%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  height: 150px;
  width: 100%;
  margin-top: -50px;
`;

const Text = styled.h2`
  color: black;
  font-size: 32px;
  padding: 10px;
`;

const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--mint);
  margin-top: 40px;
  height: 180px;
  border-radius: 4px;
`;

const Type = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  height: 100px;
  /* border: 3px solid white; */
  background-color: var(--salmon);
  border-radius: 4px;
  &:hover {
    border: 3px solid white;
  }
`;

const TypeLink = styled(NavLink)`
  color: white;
  font-size: 30px;
  text-decoration: none;
  padding: 20px;
  margin: 10px;

  &:hover {
    cursor: pointer;
    color: var(--mint);
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  padding-right: 12px;
  align-self: center;
`;

export default Homepage;
