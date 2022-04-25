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
      <TextContainer>
        <Text>Find your new bestfriend</Text>
      </TextContainer>
      <TypesContainer>
        <Type to="/pets/type/cat">Cats</Type>
        <Type to="/pets/type/dog">Dogs</Type>
        <Type to="/pets">
          <FaPaw size={30} /> All Pets
        </Type>
      </TypesContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffe6f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1000px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 8%;
  width: 100%;
`;

const Text = styled.h2`
  color: black;
  font-size: 32px;
  height: 60px;
  padding: 10px;
`;

const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Type = styled(NavLink)`
  background-color: black;
  color: white;
  font-size: 30px;
  text-decoration: none;
  padding: 20px;
  margin: 30px;
  /* height: 100px; */

  &:hover {
    cursor: pointer;
  }
`;

export default Homepage;
