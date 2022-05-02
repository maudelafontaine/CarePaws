import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
// import SearchBar from "./SearchOptions/SearchBar";
import { AppContext } from "./Context";
import { IoPaw } from "react-icons/io5";

const Header = () => {
  const { currentUser } = useContext(AppContext);

  const logoStyle = {
    fontSize: "48px",
    marginLeft: "10px",
    marginRight: "20px",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    fontFamily: "'Roboto', sans-serif",
  };

  return (
    <Container>
      <Link to="/" style={logoStyle}>
        <Logo>
          Pet finder <IoPaw />
        </Logo>
      </Link>
      {/* <SearchBar pets={pets} /> */}
      <Wrapper>
        <Link to="/favorites">
          <Text style={{ padding: "10px" }}>
            <FiHeart size={38} />
          </Text>
        </Link>
        <Line />
        <AccountContainer>
          {currentUser ? (
            <Text>Hello, {currentUser.firstName}</Text>
          ) : (
            <Link to="/signup">
              <Text>Sign Up</Text>
            </Link>
          )}
          <Link to="/login">
            <Text>Log In</Text>
          </Link>
        </AccountContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-color: var(--mauve);
`;

const Link = styled(NavLink)`
  text-decoration: none;
`;
const Logo = styled.h1`
  font-size: 45px;
  padding: 10px;
  margin-left: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h2`
  font-size: 26px;
  padding: 10px;

  &:hover {
    color: var(--mint);
  }
`;

const Line = styled.div`
  border-left: 2px solid grey;
  height: 108px;
  padding: 6px;
`;

export default Header;
