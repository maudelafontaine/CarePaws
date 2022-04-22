import React from "react";
import styled from "styled-components";
import { AppContext } from "./Context";

const Homepage = () => {
  // const [animals, setAnimals] = React.useState([]);

  const { pets, setPets } = React.useContext(AppContext);

  React.useEffect(() => {
    const findPets = async () => {
      const res = await fetch("/pets");
      const data = await res.json();
      console.log(data);
      setPets(data.data);
    };
    findPets();
  }, []);

  return (
    <Container>
      <Img src="/images/Snow.jpg" />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  width: 20%;
  height: 20%;
`;
export default Homepage;
