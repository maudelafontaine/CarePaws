// Sign Up form

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [val, setValue] = useState();
  const { setIsSignedUp, setCurrentUser } = useContext(AppContext);
  let navigate = useNavigate();

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    country,
    setCountry,
    postalCode,
    setPostalCode,
    password,
    setPassword,
  } = React.useContext(AppContext);

  // Function that handles signing up to the app
  const handleSignUp = async (e) => {
    e.preventDefault();

    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      postalCode: postalCode,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch("/user", requestOptions);
    await res.json();
    navigate("/");
    setCurrentUser(data);
    setIsSignedUp(true);
  };

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <Title>Sign Up</Title>
        <Text>
          By signing up, I agree to the Pet Finder
          <FakeLink>Privacy Policy</FakeLink>
          and
          <FakeLink>Terms of Service</FakeLink>.
        </Text>
        <InputsContainer>
          <Input
            placeholder="First name"
            value={val}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Last Name"
            value={val}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Country"
            value={val}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Postal Code"
            value={val}
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Email"
            type="email"
            value={val}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Password"
            type="password"
            value={val}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Input>
        </InputsContainer>
        <SubmitBtn onClick={() => setValue(() => "")} type="submit">
          Create Account
        </SubmitBtn>
        <Text style={{ marginTop: "50px" }}>
          Aready have an account?
          <NavigationLink to="/login">Log in</NavigationLink>
        </Text>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  background-color: var(--grey);
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: black;
  padding: 20px;

  margin-bottom: 20px;
`;

const Text = styled.h2`
  color: black;
  font-weight: normal;
  padding-bottom: 20px;
  font-size: 20px;
`;

const FakeLink = styled.a`
  cursor: default;
  font-size: 20px;
`;

const Form = styled.form`
  background-color: var(--mint);
  width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  color: black;
  border-radius: 4px;
  border: 2px solid black;
`;

const SubmitBtn = styled.button`
  color: black;
  width: 150px;
  margin-top: 25px;
  border-radius: 4px;
  background-color: white;
  font-weight: bold;
  align-self: center;
  padding: 12px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: var(--mauve);
  }
`;

const NavigationLink = styled(NavLink)`
  color: black;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export default SignUp;
