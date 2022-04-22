// detailed page of pet

import React from "react";
import styled from "styled-components";

// app.get("/pet/:_id", getPetById);

const PetDetails = () => {
  return (
    <Container>
      <Text>Hello I am a pet from petfinder</Text>
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

const Text = styled.h2`
  color: black;
`;

export default PetDetails;
