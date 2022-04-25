import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import ListingComments from "./ListingComments";

const CommentsSection = () => {
  return (
    <Container>
      <Title>Share you thoughts</Title>
      <Wrapper>
        <Input />
        <ListingComments />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 800px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  color: pink;
  padding: 20px;
  font-size: 28px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export default CommentsSection;
