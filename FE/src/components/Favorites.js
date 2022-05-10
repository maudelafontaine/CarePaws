import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./Context";
import Loader from "./Loader";

const Favorites = () => {
  const { currentUser } = useContext(AppContext);

  // states :
  const [favPets, setFavPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get favorite pets list
  useEffect(() => {
    const getFavPets = async () => {
      const res = await fetch("/favorites");
      const data = await res.json();
      console.log(data.data);
      setFavPets(data.data);
      setIsLoading(false);
    };
    getFavPets();
    console.log(currentUser);
  }, []);

  // filter pets to get the currentUser's favorite pets
  const filteredFavPets = favPets.filter((pet) => {
    return pet.user_id === currentUser._id;
  });

  console.log(filteredFavPets);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {currentUser ? (
        <Container>
          <Title>My Favorites</Title>
          <FavoritePetsContainer>
            {filteredFavPets.map((pet) => (
              <Pet key={pet._id}>
                <NavigationLink to={`/pet/${pet.pet_id}`}>
                  <PetContainer>
                    <Picture src={pet.picture} />
                    <Name>{pet.name}</Name>
                    <Breed>{pet.breed}</Breed>
                  </PetContainer>
                </NavigationLink>
              </Pet>
            ))}
          </FavoritePetsContainer>
        </Container>
      ) : (
        <Wrapper>
          <Text>
            Please
            <NavigationLink to="/signup"> Sign Up </NavigationLink>
            or
            <NavigationLink to="login"> Log In </NavigationLink>
            to add pets to your favorite list.
          </Text>
          <Bg src="/images/bg_favorites.jpg" />
        </Wrapper>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--grey);
`;

const Title = styled.h1`
  color: black;
  font-size: 28px;
  margin-top: 50px;
  margin-bottom: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--mint);
  border-radius: 20px;
`;

const FavoritePetsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
`;

const Pet = styled.div`
  margin: 15px;
`;

const PetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 4px solid var(--salmon);
  height: 350px;
  width: 350px;
  border-radius: 4px;
`;

const Picture = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 2px;
  margin-bottom: 20px;
  align-self: center;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Name = styled.p`
  color: black;
  font-size: 24px;
  margin-bottom: 8px;
  margin-top: 15px;
`;

const Breed = styled.p`
  color: black;
  font-size: 20px;
  font-weight: normal;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
  background-color: var(--grey);
`;

const Text = styled.h1`
  color: black;
  font-size: 30px;
  padding: 20px;
  margin-bottom: 80px;
`;

const Bg = styled.img`
  width: 500px;
  border-radius: 5%;
  border: 6px solid var(--green);
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: black;

  &:hover {
    cursor: pointer;
    color: var(--mint);
  }
`;

export default Favorites;
