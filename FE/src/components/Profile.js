import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./Context";

const Profile = () => {
  const { currentUser } = useContext(AppContext);

  const [newFirstName, setNewdFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newcountry, setNewCountry] = useState("");
  const [newPostalCode, setNewPostalCode] = useState("");
  const [newPw, setNewPw] = useState("");

  const handleUpdate = () => {
    console.log("update");
  };

  return (
    <>
      {currentUser ? (
        <Container>
          <Title>My Profile</Title>
          <Text>
            Please edit in fields the information wished to be updated.{" "}
          </Text>
          <Wrapper>
            {/* <Form onSubmit={handleUpdate}> */}
            <DataContainer>
              <Data>First name : {currentUser.firstName}</Data>
              <Data>Last name : {currentUser.lastName}</Data>
              <Data>Email : {currentUser.email}</Data>
              <Data>Country : {currentUser.country} </Data>
              <Data>Postal Code : {currentUser.postalCode}</Data>
              <Data>Password</Data>
            </DataContainer>
            <InputsContainer>
              <Input
                placeholder="firstName"
                onChange={(e) => {
                  setNewdFirstName(e.target.value);
                }}
              ></Input>
              <Input
                placeholder="last name"
                onChange={(e) => {
                  setNewLastName(e.target.value);
                }}
              ></Input>
              <Input
                placeholder="email"
                type="email"
                onChange={(e) => {
                  setNewEmail(e.target.value);
                }}
              ></Input>
              <Input
                placeholder="country"
                onChange={(e) => {
                  setNewCountry(e.target.value);
                }}
              ></Input>
              <Input
                placeholder="postal code"
                onChange={(e) => {
                  setNewPostalCode(e.target.value);
                }}
              ></Input>
              <Input
                placeholder="password"
                type="password"
                onChange={(e) => {
                  setNewPw(e.target.value);
                }}
              ></Input>
              <UpdateBtn onClick={handleUpdate}>Update</UpdateBtn>
            </InputsContainer>
            {/* </Form> */}
          </Wrapper>
        </Container>
      ) : (
        <Container>
          <Title>Please log in/ sign up</Title>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  color: black;
  font-size: 25px;
  margin-top: 30px;
`;

const Text = styled.h2`
  color: black;
  font-weight: normal;
  margin: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 600px;
  /* background-color: pink; */
`;

// const Form = styled.form``;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin: 40px;
`;

const Data = styled.p`
  color: black;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin: 40px;
`;

const Input = styled.input`
  margin: 10px;
`;

const UpdateBtn = styled.button`
  width: 100px;
  height: 50px;
  color: black;
  margin: 15px;
  border: none;
  background-color: var(--mint);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export default Profile;
