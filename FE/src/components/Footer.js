import React from "react";
import styled from "styled-components";

/* To do's :
- change photos and icons for hyperlinks
- maude needs to link to github when clicked on

*/

const Footer = () => {
  return (
    <Container>
      <Developer>Made by @MaudeLafontaine</Developer>
      <CreditsContainer>
        <Text style={{ borderBottom: "2px solid black", width: "60px" }}>
          Credits
        </Text>
        <Text style={{ color: "black" }}>Photos : https://unsplash.com/</Text>
        <Text style={{ color: "black" }}>Icons : https://icons8.com/</Text>
      </CreditsContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  padding: 5px;
`;

export default Footer;
