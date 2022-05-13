import React, { useContext, useState } from "react";
import styled from "styled-components";

import { AiOutlineEdit } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context";
// list currentUser personnal info

// need to link to EditProfile
const Profile = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <>
      {currentUser ? (
        <Container>
          <Wrapper>
            <Title>My Profile</Title>
            <Text>Saved information</Text>
            <Line />
            <DataContainer>
              <Data>{currentUser.firstName}</Data>
              <Data>{currentUser.lastName}</Data>
              <Data>{currentUser.email}</Data>
              <Data>{currentUser.country} </Data>
              <Data>{currentUser.postalCode}</Data>
              {/* <Data>Password</Data> */}
            </DataContainer>
            <Line />
            <NavigationLink to={`/my-profile/${currentUser._id}/edit`}>
              <EditBtn>
                Edit your information <AiOutlineEdit size={20.1} />
              </EditBtn>
            </NavigationLink>
          </Wrapper>
        </Container>
      ) : (
        <Container style={{ height: "600px" }}>
          <Text style={{ margin: "40px" }}>Please Sign Up/Log In</Text>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--grey);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 400px;
  background-color: var(--mint);
`;

const Title = styled.h1`
  color: black;
  font-size: 26px;
  margin-bottom: 30px;
`;

const Text = styled.p`
  color: black;
  font-size: 22px;
  margin-bottom: 10px;
`;

const Line = styled.div`
  border-bottom: 5px solid white;
  width: 380px;
  margin-top: 10px;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  border: none;
  margin-top: 30px;
`;

const EditBtn = styled.button`
  color: black;
  font-size: 22px;
  background-color: white;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: var(--mauve);
  }
`;

// const Form = styled.form``;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Data = styled.p`
  color: black;
  font-size: 20px;
`;

export default Profile;
