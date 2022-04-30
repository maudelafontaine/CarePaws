import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../Context";

// *** add conditional rendering : if signed in -> show comment box, if not show message
// if signed in = user can delete his comment, else he cannot

const Input = () => {
  const { comment, setComment } = useContext(AppContext);
  // const { isDisabled, setIsDisabled } = useState(false);
  const handleChange = (e) => {
    setComment(e.target.value);
    console.log(e.target.value);
  };

  const handleComment = async (e) => {
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
    console.log("comment added to db");
  };

  return (
    <Container>
      <Form onSubmit={handleComment}>
        <CommentInput
          placeholder="Write your comment here"
          value={comment}
          onChange={handleChange}
        ></CommentInput>
        <BtnContainer>
          {comment.length === 0 ? (
            <SendBtn disabled>Send</SendBtn>
          ) : (
            <SendBtn type="submit">Send</SendBtn>
          )}
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
  margin-right: 20px;
`;

const CommentInput = styled.input`
  width: 500px;
  height: 200px;
  border: 2px solid black;
  /* margin: 20px; */
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 500px;
  margin-top: 10px;
`;

const SendBtn = styled.button`
  padding: 14px;
  width: 100px;
  color: black;
  border: none;
  border-radius: 4px;
  font-weight: bold;
`;

const DeleteBtn = styled.button`
  padding: 14px;
  width: 100px;
  color: black;
  border: none;
  border-radius: 4px;
  font-weight: bold;
`;

export default Input;
