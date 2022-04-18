import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import About from "./About";
import Favorites from "./Favorites";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Homepage from "./Homepage";
import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";

const App = () => {
  return (
    <Wrapper>
      <Router>
        <GlobalStyles />
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="favorites" element={<Favorites />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  background-color: pink;
`;

const Main = styled.div`
  /* background-color: yellow; */
  border: 2px solid black;
  height: 900px;
  background-color: white;
`;
