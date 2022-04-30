import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import ListingComments from "./ListingComments";

const CommentsSection = () => {
  return (
    <Container>
      <Title>Share you thoughts!</Title>
      <Wrapper>
        <Input />
        <ListingComments />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  background-color: var(--mint);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* height: 100%;
  width: 100%; */
  /* margin-bottom: 50px; */
`;

const Title = styled.h1`
  color: black;
  padding: 20px;
  font-size: 28px;
  padding: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* align-content: flex-start; */
  /* align-items: center; */
`;

export default CommentsSection;
