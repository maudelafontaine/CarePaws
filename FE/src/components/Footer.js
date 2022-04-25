import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Logo></Logo>
      <Text>Find out more about Pets Happy Tails</Text>
      <Text>Made by @MaudeLafontaine</Text>
    </Container>
  );
};

const Container = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.h1``;

const Text = styled.h2`
  padding: 20px;
`;

export default Footer;
