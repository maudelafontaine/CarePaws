import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context";

// *** add conditional rendering : if signed in -> show comment box, if not show message

const Input = () => {
  const { comment, setComment } = useContext(AppContext);

  const handleChange = (e) => {
    setComment(e.target.value);
    console.log(e.target.value);
  };

  const handleComment = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ comment: comment }),
    };

    const res = await fetch("/comment", requestOptions);
    await res.json();
    // setComment(comment);
    console.log("comment added to db");
  };

  return (
    <Container>
      <Form onSubmit={handleComment}>
        <CommentInput
          placeholder="..."
          value={comment}
          onChange={handleChange}
        ></CommentInput>
        <BtnContainer>
          <SendBtn type="submit">Send</SendBtn>
          <DeleteBtn>Delete</DeleteBtn>
        </BtnContainer>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
