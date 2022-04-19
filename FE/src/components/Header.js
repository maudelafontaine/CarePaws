import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const Header = () => {
  const logoStyle = {
    fontSize: "44px",
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
          <FiHeart size={35} />
        </Text>
      </Link>
      <Link to="/signup">
        <Text>Sign Up</Text>
      </Link>
      <Link to="/login">
        <Text>Log In</Text>
      </Link>
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

const Logo = styled.h1`
  font-size: 40px;
  padding: 10px;
`;

const Text = styled.h2`
  font-size: 25px;
  padding: 10px;
`;

export default Header;
