import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Title>Log in</Title>
        <Form onSubmit={handleLogin}>
          <Input placeholder="Email" type="email"></Input>
          <Input placeholder="Password" type="password"></Input>
          <LogBtn type="submit">LOG IN</LogBtn>
        </Form>
        {/* <Text>Forgot password?</Text> */}
        <Text>or log in with</Text>
        <GoogleBtn>Google</GoogleBtn>
        <Text style={{ padding: "30px" }}>
          Need an account?
          <NavigationLink to="/signup">Sign Up</NavigationLink>
        </Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: var(--grey);
`;

const Wrapper = styled.div`
  background-color: var(--salmon);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  border-radius: 4px;
  /* border: 6px solid var(--mint); */
`;

const Title = styled.h1`
  color: black;
  font-size: 30px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: var(--mint); */
`;

const Input = styled.input`
  border: 2px solid black;
`;

const LogBtn = styled.button`
  border: 2px solid black;
  color: black;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px;
  margin-top: 12px;
  margin-bottom: 20px;
  font-size: 18px;
  /* width: 20%; */

  &:hover {
    cursor: pointer;
    background-color: var(--mint);
  }
`;

const Text = styled.h3`
  color: black;
  padding: 10px;
  font-weight: normal;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const GoogleBtn = styled.button`
  border: 2px solid black;
  color: black;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px;
  width: 20%;
  font-size: 18px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default Login;
