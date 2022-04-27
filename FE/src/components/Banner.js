import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <Text>
        Browse pets from our network of shelters and rescues from Montreal, Qc.
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: var(--salmon);
`;

const Text = styled.h2`
  font-size: 18px;
`;

export default Banner;
