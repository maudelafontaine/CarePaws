import React from "react";
import styled from "styled-components";

/* To do's :
- change photos and icons for hyperlinks
- maude needs to link to github when clicked on

*/
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
            color: "black",
            textDecoration: "none",
            fontSize: "20px",
            color: "var(--salmon",
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
  /* padding: 20px; */
  color: black;
  font-size: 20px;
  padding: 5px;
`;

export default Footer;
