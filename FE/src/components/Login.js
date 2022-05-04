import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./Context";
import Loader from "./Loader";

const Login = () => {
  const {
    userId,
    setUserId,
    pw,
    setPw,
    setCurrentUser,
    setIsLogedIn,
    firstName,
    setIsLoading,
  } = useContext(AppContext);

  const [status, setStatus] = useState("");
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        const findUser = data.data.find((user) => {
          return (
            user.email.toLowerCase() === userId.toLowerCase() &&
            user.password.toLowerCase() === pw.toLowerCase()
          );
        });
        console.log(findUser);
        if (findUser) {
          navigate("/");
          setCurrentUser(findUser);
          setIsLogedIn(true);
          setStatus("success!");
        } else {
          setStatus("error!");
        }
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Log in</Title>
        <Form>
          <Input
            placeholder="Email"
            type="email"
            // value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              console.log(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Password"
            type="password"
            // value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          ></Input>
          {status ? (
            <>
              <LogBtn onClick={handleLogin}>LOG IN</LogBtn>
              <ErrorMessage>
                Please, verify your email and password.
              </ErrorMessage>
            </>
          ) : (
            <LogBtn onClick={handleLogin}>LOG IN</LogBtn>
          )}
        </Form>
        <Text style={{ paddingTop: "30px" }}>or log in with</Text>
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
  height: 800px;
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

const Form = styled.div`
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
    background-color: var(--mauve);
  }
`;

const ErrorMessage = styled.h2`
  color: black;
`;

const Text = styled.h3`
  color: black;
  padding: 10px;
  font-weight: normal;
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
