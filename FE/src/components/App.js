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
import Cats from "./Pets/Cats";
import Dogs from "./Pets/Dogs";
import SignUp from "./SignUp";
import PetDetails from "./PetDetails";

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
            <Route path="/pet/:_id" element={<PetDetails />} />
            <Route path="/pets/cats" element={<Cats />} />
            <Route path="/pets/dogs" element={<Dogs />} />
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
  /* border: 2px solid black; */
  /* height: 900px; */
  background-color: white;
`;
