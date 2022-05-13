import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../Context";

// edit current user personnal info
const EditProfile = () => {
  const { currentUser } = useContext(AppContext);

  const [newFirstName, setNewdFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newcountry, setNewCountry] = useState("");
  const [newPostalCode, setNewPostalCode] = useState("");
  const [newPw, setNewPw] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const { _id } = useParams();
  const handleUpdate = async () => {
    let data = {
      // user_id: currentUser._id,
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      country: newcountry,
      postalCode: newPostalCode,
      password: newPw,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(`/user/${_id}`, requestOptions);
    await res.json();
    setIsUpdated(true);
    console.log("updated");
  };

  return (
    <>
      {currentUser ? (
        <Container>
          <Wrapper>
            <Title>Edit Profile</Title>
            {/* <InputsContainer> */}
            <Line />
            <Input
              placeholder="firstName"
              onChange={(e) => {
                setNewdFirstName(e.target.value);
              }}
              style={{ marginTop: "40px" }}
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
            {/* </InputsContainer> */}
            {/* </Form> */}
            {isUpdated === true ? (
              // <TextContainer>
              <Text>Your information have been successfully changed.</Text>
            ) : (
              // </TextContainer>
              <Text style={{ backgroundColor: "var(--mint)" }}></Text>
            )}
          </Wrapper>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey);
  width: 100%;
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
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Line = styled.div`
  border-bottom: 5px solid white;
  width: 300px;
  /* margin-top: 10px; */
`;

// const InputsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 100px;
//   margin: 40px;
//   height: 600px;
//   width: 400px;
//   background-color: var(--mint);
// `;

const Input = styled.input`
  margin: 10px;
  border: 2px solid black;
  border-radius: 4px;
`;

const UpdateBtn = styled.button`
  color: black;
  font-size: 22px;
  background-color: white;
  padding: 12px;
  margin-top: 25px;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: var(--mauve);
  }
`;

// const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const Text = styled.h1`
  background-color: white;
  color: black;
  padding: 10px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: normal;
  align-self: center;
`;
export default EditProfile;
