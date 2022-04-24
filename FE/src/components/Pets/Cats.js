import React from "react";
import styled from "styled-components";
import { AppContext } from "../Context";
import { useParams } from "react-router-dom";

// app.get("/pets/:type", getPetsByType);

const Cats = () => {
  const { cats, setCats } = React.useContext(AppContext);

  const { type } = useParams();

  React.useEffect(() => {
    const getCats = async () => {
      const res = await fetch("/pets/:type");
      const data = await res.json();
      console.log(data);
      setCats(data.data);
    };
    getCats();
  }, []);

  return <Container></Container>;
};

const Container = styled.div``;

export default Cats;
