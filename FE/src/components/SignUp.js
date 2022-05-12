// sign up form

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

// To-do's :
// if signup works -> redirect to hp and show message that it worked
// else => show message saying it didn't work bc user already have account

const SignUp = () => {
  let navigate = useNavigate();

  const [val, setValue] = useState();

  const { setIsSignedUp, setCurrentUser } = useContext(AppContext);

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

  // fetch("/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       const findUser = data.data.find((user) => {
  //         return (
  //           user.email.toLowerCase() === userId.toLowerCase() &&
  //           user.password.toLowerCase() === pw.toLowerCase()
  //         );
  //       });

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
    console.log("user added to db");
    navigate("/");
    setCurrentUser(data);
    console.log(data);
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
            // required
            // value={value}
            value={val}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Last Name"
            // required
            value={val}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Country"
            // required
            value={val}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Postal Code"
            // required
            value={val}
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Email"
            // required
            type="email"
            value={val}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Password"
            // required
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
  /* margin-top: 10px; */
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
  /* border: 2px solid black; */
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

// switch(value) {
//   case "firstName":
//     setFirstName(e.target.value);
//     break;
//   case "lastName":
//     setLastName(e.target.value);

// }
