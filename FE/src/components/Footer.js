import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Logo>Made By</Logo>
      <Text>@MaudeLafontaine</Text>
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

const Text = styled.h2``;

export default Footer;
