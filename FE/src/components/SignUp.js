// sign up form

import React from "react";
import styled from "styled-components";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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

  const handleFN = (e) => {
    setFirstName(e.target.value);
  };

  const handleLN = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handlePC = (e) => {
    setPostalCode(e.target.value);
  };

  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // add endpoint here
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSignUp}>
        <Input
          placeholder="First name"
          value={firstName}
          onChange={handleFN}
        ></Input>
        <Input
          placeholder="Last Name"
          value={lastName}
          onChange={handleLN}
        ></Input>
        <Input
          placeholder="Country"
          value={country}
          onChange={handleCountry}
        ></Input>
        <Input
          placeholder="Postal Code"
          value={postalCode}
          onChange={handlePC}
        ></Input>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmail}
        ></Input>
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePw}
        ></Input>
        {/* <Input placeholder="Confirm password"></Input> */}
        <SubmitBtn type="submit">Sign Up</SubmitBtn>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: black;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  /* display: flex;
  flex-direction: row;
  /* flex-wrap: wrap;
  gap: 20px; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input``;

const SubmitBtn = styled.button``;

export default SignUp;

// switch(value) {
//   case "firstName":
//     setFirstName(e.target.value);
//     break;
//   case "lastName":
//     setLastName(e.target.value);

// }
