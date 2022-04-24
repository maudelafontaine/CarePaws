import React from "react";
import styled from "styled-components";

const Favorites = () => {
  return (
    <Container>
      <Text>My Favorites</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const Text = styled.h1`
  color: black;
  font-size: 30px;
`;

export default Favorites;
