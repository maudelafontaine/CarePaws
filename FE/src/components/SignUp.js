// sign up form

import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Container>
      <Title>Sign Up</Title>
      <Text></Text>
      <Input placeholder="First name"></Input>
      <Input placeholder="Last Name"></Input>
      <Input placeholder="Country"></Input>
      <Input placeholder="Postal Code"></Input>
      <Input placeholder="Email"></Input>
      <Input placeholder="Password"></Input>
      <Input placeholder="Confirm password"></Input>
      <SubmitBtn>Sign Up</SubmitBtn>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: black;
`;

const Text = styled.h2``;

const Input = styled.input``;

const SubmitBtn = styled.button``;

export default SignUp;
