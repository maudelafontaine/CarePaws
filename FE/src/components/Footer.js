import React from "react";
import styled from "styled-components";

const myGithubUrl = "https://github.com/maudelafontaine";
const photosUrl = "https://unsplash.com/";
const iconsUrl = "https://icons8.com/";

const Footer = () => {
  return (
    <Container>
      <Developer>
        Made by{" "}
        <a
          href={myGithubUrl}
          style={{
            color: "var(--salmon)",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          Maude Lafontaine
        </a>
      </Developer>
      <CreditsContainer>
        <Text style={{ borderBottom: "2px solid black", width: "60px" }}>
          Credits
        </Text>
        <a href={photosUrl} style={{ color: "black", textDecoration: "none" }}>
          Photos
        </a>
        <a href={iconsUrl} style={{ color: "black", textDecoration: "none" }}>
          Icons
        </a>
      </CreditsContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--mauve);
`;

const Developer = styled.h1`
  padding: 30px;
`;

const CreditsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h2`
  color: black;
  font-size: 20px;
  padding: 5px;
`;

export default Footer;
