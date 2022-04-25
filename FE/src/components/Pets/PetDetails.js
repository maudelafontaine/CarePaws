// detailed page of pet

import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { FiHeart } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import CommentsSection from "../Comments/CommentsSection";

// app.get("/pet/:_id", getPetById);

const PetDetails = () => {
  const { _id } = useParams();
  const [pet, setPet] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container key={pet._id}>
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
            <Data key={pet.characteristics[c]}>{c}</Data>
          ))}
          <Section>Health</Section>
          <Data>Health: {pet.health}</Data>
          <Section>Friendliness</Section>
          {pet.good_with_dogs ? (
            <Data>good with other dogs : Yes</Data>
          ) : (
            <Data>good with other dogs : No</Data>
          )}
          {pet.good_with_cats ? (
            <Data>good with other cats : Yes</Data>
          ) : (
            <Data>good with other cats : No</Data>
          )}
          {pet.good_with_children ? (
            <Data>good with children : Yes</Data>
          ) : (
            <Data>good with children : No</Data>
          )}
        </PetContainer>
        <Wrapper>
          <AdoptContainer>
            <Text>Considering {pet.name} for adoption?</Text>
            <Btn>Start your inquiry</Btn>
            <Btn>Read FAQS</Btn>
            <Btn>
              <FiHeart size={20} /> favorites
            </Btn>
          </AdoptContainer>
          <OrganizationContainer>
            <Section>Oganization</Section>
            <Data>
              <GoLocation /> {pet.organization}
            </Data>
            <Data>{pet.location}</Data>
            <Data>
              <AiOutlineMail size={22} /> email
            </Data>
            <Btn>More about us </Btn>
          </OrganizationContainer>
        </Wrapper>
      </PetInfoContainer>
      <CommentsSection />
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffe6f2;
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
  margin: 20px;
  background-color: white;
`;

const Picture = styled.img`
  height: 14%;
  width: 14%;
  border-radius: 5px;
  padding: 10px;
  /* border: 4px solid black; */
`;

const PetInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const PetContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  background-color: white;
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
`;

const AdoptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const OrganizationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  background-color: white;
`;
const Data = styled.h2`
  color: black;
  padding: 10px;
  font-size: 22px;
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
  border: 3px solid pink;
  font-size: 20px;
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default PetDetails;
