import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Title>Log in</Title>
      <Form>
        <Input placeholder="Email" type="email"></Input>
        <Input placeholder="Password" type="password"></Input>
        <LogBtn>LOG IN</LogBtn>
      </Form>
      <Text>Forgot password?</Text>
      <Text>or log in with</Text>
      <GoogleBtn>Google</GoogleBtn>
      <Text>Need an account? Sign up</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 1000px; */
`;

const Title = styled.h1`
  color: black;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input``;

const LogBtn = styled.button``;

const Text = styled.h3`
  color: black;
`;

const GoogleBtn = styled.button``;

export default Login;
