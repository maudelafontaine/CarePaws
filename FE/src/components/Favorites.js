import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./Context";

const Favorites = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <>
      {currentUser ? (
        <Container>
          <Title>My Favorites</Title>
        </Container>
      ) : (
        <Wrapper>
          <Text>
            Please
            <NavigationLink to="/signup"> Sign Up </NavigationLink>
            or
            <NavigationLink to="login"> Log In </NavigationLink>
            to add pets to your favorite list.
          </Text>
          <Bg src="/images/bg_favorites.jpg" />
        </Wrapper>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  height: 800px;
  background-color: var(--grey);
`;

const Title = styled.h1`
  color: black;
  font-size: 30px;
  margin-top: 50px;
  padding: 10px;
  /* background-color: pink; */
  width: 220px;
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
  background-color: var(--grey);
`;

const Text = styled.h1`
  color: black;
  font-size: 30px;
  padding: 20px;
  margin-bottom: 80px;
`;

const Bg = styled.img`
  width: 500px;
  /* height: 400px; */
  border-radius: 5%;
  border: 6px solid var(--green);
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: black;

  &:hover {
    cursor: pointer;
    color: var(--mint);
  }
`;

export default Favorites;
