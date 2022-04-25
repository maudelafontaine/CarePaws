import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const Header = () => {
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
        <Logo>Pet finder</Logo>
      </Link>
      <Link to="/favorites">
        <Text>
          <FiHeart size={38} />
        </Text>
      </Link>
      <AccountContainer>
        <Link to="/signup">
          <Text>Sign Up</Text>
        </Link>
        <Line />
        <Link to="/login">
          <Text>Log In</Text>
        </Link>
      </AccountContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 120px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Logo = styled.h1`
  font-size: 45px;
  padding: 10px;
`;

const Text = styled.h2`
  font-size: 34px;
  padding: 10px;
`;

const Line = styled.div`
  border-left: 4px solid grey;
  height: 60px;
`;

export default Header;
