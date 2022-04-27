import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../Context";

// *** add conditional rendering : if signed in -> show comment box, if not show message

const Input = () => {
  //   const [comment, setComment] = useState("");

  const { comments, setComments } = useContext(AppContext);

  const handleChange = (e) => {
    setComments(e.target.value);
    console.log(e.target.value);
  };

  const handleComment = (e) => {
    console.log("clicked");
  };

  return (
    <Container>
      <CommentInput
        placeholder="..."
        value={comments}
        onChange={handleChange}
      ></CommentInput>
      <BtnContainer>
        <SendBtn onClick={handleComment}>Send</SendBtn>
        <DeleteBtn>Delete</DeleteBtn>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentInput = styled.input`
  width: 400px;
  height: 100px;
  margin: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
`;

const SendBtn = styled.button`
  padding: 10px;
  width: 100px;
  color: black;
`;

const DeleteBtn = styled.button`
  padding: 10px;
  width: 100px;
  color: black;
`;

export default Input;
