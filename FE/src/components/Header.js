import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { AppContext } from "./Context";
import { IoPaw } from "react-icons/io5";

const Header = () => {
  const {
    currentUser,
    isSignedUp,
    isLogedIn,
    setIsSignedUp,
    setCurrentUser,
    setIsLogedIn,
  } = useContext(AppContext);

  // currentUser : if user logs in
  // isSignedUp : if user signs up

  let navigate = useNavigate();

  const handleLogOut = () => {
    if (isLogedIn) {
      setIsSignedUp(false); //SignUp
      setCurrentUser(""); // LogIn
      //
      setIsLogedIn(false);
      navigate("/");
    }
  };

  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <Logo>Pet finder</Logo>
        </Link>
        <IoPaw style={{ color: "var(--mint)", fontSize: "60px" }} />
      </LogoContainer>
      <Wrapper>
        <Link to="/favorites">
          <Text style={{ padding: "20px" }}>
            <FiHeart size={40} />
          </Text>
        </Link>
        {currentUser ? (
          <Link to={`/my-profile/${currentUser._id}`}>
            <Text style={{ padding: "20px" }}>My Profile</Text>
          </Link>
        ) : (
          <></>
        )}
        <Line />
        <AccountContainer>
          {isLogedIn || isSignedUp ? (
            <Text style={{ color: "black" }}>
              Hello,{" "}
              {currentUser.firstName.charAt(0).toUpperCase() +
                currentUser.firstName.slice(1)}
            </Text>
          ) : (
            <Link to="/signup">
              <Text>Sign Up</Text>
            </Link>
          )}
          {isLogedIn || isSignedUp ? (
            <LogoutContainer>
              <Btn onClick={handleLogOut}>Log out</Btn>
              <AiOutlineLogout size={30} style={{ color: "white" }} />
            </LogoutContainer>
          ) : (
            <LoginContainer>
              <Link to="/login">
                <LoginText>Log In</LoginText>
              </Link>
              <AiOutlineLogin size={30} style={{ color: "white" }} />
            </LoginContainer>
          )}
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

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  /* font-size: 26px; */

  &:hover {
    color: var(--salmon);
  }
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

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  &:hover {
    color: var(--salmon);
  }
`;

const LoginText = styled.h2`
  font-size: 26px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 8px;

  &:hover {
    color: var(--salmon);
  }
`;

const Text = styled.h2`
  font-size: 26px;
  padding: 20px;

  &:hover {
    color: var(--salmon);
  }
`;

const Line = styled.div`
  border-left: 3px solid grey;
  height: 108px;
  padding: 6px;
`;
const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Btn = styled.button`
  font-size: 26px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 8px;
  border: none;
  background-color: var(--mauve);
  font-weight: bold;

  &:hover {
    color: var(--salmon);
    cursor: pointer;
  }
`;

export default Header;

// {firstName.charAt(0).toUpperCase() + firstName.slice(1) ||
// currentUser.firstName.charAt(0).toUpperCase() +
// currentUser.firstName.slice(1)}
