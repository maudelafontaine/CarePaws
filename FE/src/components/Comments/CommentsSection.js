import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../Context";
import Input from "./Input";
import ListingComments from "./ListingComments";

import { IoPaw } from "react-icons/io5";

const CommentsSection = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <Container>
      <Title>Share you thoughts!</Title>
      {currentUser ? (
        <Wrapper>
          <Input />
          <ListingComments />
        </Wrapper>
      ) : (
        <TextContainer>
          <Text style={{ fontSize: "22px" }}>
            Please sign in to leave a comment.
          </Text>
          <IoPaw size={34} style={{ margin: "20px" }} />
          <Text>
            Already have an account ?
            <NavigationLink to="/login">Log In</NavigationLink>
          </Text>
          <Text>
            Don't have an account ?{" "}
            <NavigationLink to="/signup">Sign Up</NavigationLink>
          </Text>
        </TextContainer>
      )}
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

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.h2`
  color: black;
  padding: 10px;
  font-size: 20px;
  font-weight: normal;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: var(--mauve);
  }
`;

export default CommentsSection;
