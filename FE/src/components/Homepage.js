import React from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <Container>
      <Img src="/images/Snow.jpg" />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  width: 20%;
  height: 20%;
`;
export default Homepage;
