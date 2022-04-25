import React from "react";

import styled from "styled-components";

const ListingComments = () => {
  return (
    <Container>
      <Text>Comments</Text>
    </Container>
  );
};

const Container = styled.div`
  margin: 50px;
  display: flex;
`;

const Text = styled.h2`
  color: black;
  font-size: 24px;
`;

export default ListingComments;
