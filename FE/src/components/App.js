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
import PetDetails from "./Pets/PetDetails";
import Pets from "./Pets/Pets";
import Banner from "./Banner";
import Profile from "./Profile/Profile";
import EditProfile from "./Profile/EditProfile";

const App = () => {
  return (
    <Wrapper>
      <Router>
        <GlobalStyles />
        <Banner />
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="/my-profile/:_id" element={<Profile />} />
            <Route path="/my-profile/:_id/edit" element={<EditProfile />} />
            <Route path="/pet/:_id" element={<PetDetails />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/pets/type/cat" element={<Cats />} />
            <Route path="/pets/type/dog" element={<Dogs />} />
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

// Notes :
// https://www.robinwieruch.de/local-storage-react/ -> localstorage
