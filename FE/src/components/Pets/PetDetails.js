// A detailed page for each pet

import React, { useContext } from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { FiHeart } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import CommentsSection from "../Comments/CommentsSection";
import { AppContext } from "../Context";

const PetDetails = () => {
  const { currentUser } = useContext(AppContext);
  const { _id } = useParams();
  const [pet, setPet] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const userId = currentUser._id;
  const userEmail = currentUser.email;

  // get pet by _id
  useEffect(() => {
    const findPet = async () => {
      const res = await fetch(`/pet/${_id}`);
      const data = await res.json();
      console.log(data.data);
      setPet(data.data);
      setIsLoading(false);
    };
    findPet();
  }, [_id]);

  // post favorite pet to db
  const handleFavorite = async () => {
    let data = {
      user_id: userId,
      user_email: userEmail,
      pet_id: pet._id,
      picture: pet.picture,
      name: pet.name,
      breed: pet.breed,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch("/favorite", requestOptions);
    await res.json();
    console.log("favorite pet added to db");
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <PictureContainer>
        <Picture src={pet.picture} />
        <Data style={{ fontSize: "28px" }}>{pet.name}</Data>
        <Data>The {pet.breed}</Data>
      </PictureContainer>
      <PetInfoContainer>
        <PetContainer>
          <Section>About</Section>
          <Data>Size: {pet.size}</Data>
          <Data>Sex: {pet.sex}</Data>
          <Data>Age: {pet.age}</Data>
          <Data>Color: {pet.color}</Data>
          <Data>Coat: {pet.coat}</Data>
          <Section>Characteristics</Section>
          {pet.characteristics.map((c) => (
            <Data key={c}>{c}</Data>
          ))}
          <Section>Health</Section>
          <Data>{pet.health}.</Data>
          <Section>Friendliness</Section>
          {pet.good_with_dogs ? (
            <Data>Good with other dogs : Yes</Data>
          ) : (
            <Data>Good with other dogs : No</Data>
          )}
          {pet.good_with_cats ? (
            <Data>Good with other cats : Yes</Data>
          ) : (
            <Data>Good with other cats : No</Data>
          )}
          {pet.good_with_children ? (
            <Data>Good with children : Yes</Data>
          ) : (
            <Data>Good with children : No</Data>
          )}
        </PetContainer>
        <Wrapper>
          <AdoptContainer>
            <Text>Considering {pet.name} for adoption?</Text>
            <Btn>Start your inquiry</Btn>
            <Btn>Read FAQS</Btn>
            {currentUser ? (
              <AddToFavoritesBtn onClick={handleFavorite}>
                <FiHeart size={30} style={{ color: "var(--mint)" }} />{" "}
              </AddToFavoritesBtn>
            ) : (
              <AddToFavoritesBtnDisabled disabled>
                <FiHeart size={30} style={{ color: "var(--salmon)" }} />{" "}
              </AddToFavoritesBtnDisabled>
            )}
            <FavoritesContainer></FavoritesContainer>
          </AdoptContainer>
          <OrganizationContainer>
            <Section style={{ textDecoration: "none" }}>Oganization</Section>
            <NameContainer>
              <Data>
                <GoLocation size={22} /> {pet.organization}
              </Data>
            </NameContainer>

            <Data>{pet.location}</Data>
            <EmailContainer>
              <Data>
                <AiOutlineMail size={22} style={{ marginBottom: "-4px" }} />{" "}
                email
              </Data>
            </EmailContainer>
            <Btn>More about us </Btn>
          </OrganizationContainer>
        </Wrapper>
      </PetInfoContainer>
      <CommentsSection />
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 60%;
  margin: 20px;
  background-color: white;
  border-right: 6px solid var(--green);
  border-left: 6px solid var(--green);
`;

const Picture = styled.img`
  height: 18%;
  width: 18%;
  border-radius: 5px;
  padding: 10px;
`;

const PetInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const PetContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  background-color: white;
  border: 3px solid var(--mauve);
  margin-right: 100px;
  margin-bottom: 100px;
  width: 600px;
`;

const Section = styled.h1`
  text-decoration: underline;
  font-size: 24px;
  text-decoration-thickness: 3px;
  color: black;
  margin-top: 10px;
  padding-bottom: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
`;

const AdoptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 3px solid var(--mauve);
  width: 400px;
  padding: 20px;
`;

const OrganizationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  background-color: white;
  border: 3px solid var(--mauve);
  width: 400px;
  padding: 20px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* background-color: pink; */
`;

const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 150px;
  /* background-color: pink; */
`;

const Data = styled.h2`
  color: black;
  padding: 10px;
  font-size: 22px;
  font-weight: normal;
`;

const Text = styled.h2`
  color: black;
  padding: 10px;
  font-size: 22px;
  padding: 10px;
`;

const Btn = styled.button`
  /* height: 30px; */
  padding: 10px;
  color: black;
  border: none;
  border-radius: 4px;
  /* border: 3px solid pink; */
  font-size: 20px;
  margin: 10px;

  &:hover {
    cursor: pointer;
    background-color: var(--green);
  }
`;

const FavoritesContainer = styled.div``;

const AddToFavoritesBtn = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border: none;
  border-radius: 4px;
  border: 3px solid var(--salmon);
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    /* background-color: var(--sa); */
  }
`;

const AddToFavoritesBtnDisabled = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border: none;
  border-radius: 4px;
  border: 3px solid var(--salmon);
  margin-top: 10px;
`;

export default PetDetails;
