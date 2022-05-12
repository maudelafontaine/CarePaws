import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../Context";

// *** add conditional rendering : if signed in -> show comment box, if not show message
// if signed in = user can delete his comment, else he cannot

const Input = ({ getComments }) => {
  const { comment, setComment, currentUser } = useContext(AppContext);
  const [val, setValue] = useState();

  const userId = currentUser._id;
  const userEmail = currentUser.email;
  const userName = currentUser.firstName;

  const handleChange = (e) => {
    setComment(e.target.value);
    // console.log(e.target.value);
  };

  const handleComment = async (e) => {
    e.preventDefault();

    let data = {
      comment: comment,
      user_id: userId,
      user_email: userEmail,
      user_name: userName,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch("/comment/:_id", requestOptions);
    await res.json();
    console.log("comment added to db");
    getComments();
  };

  return (
    <Container>
      <Form onSubmit={handleComment}>
        <CommentInput
          placeholder="Write your comment here"
          value={val}
          type="text"
          onChange={handleChange}
        ></CommentInput>
        <BtnContainer>
          {comment.length === 0 ? (
            <SendBtn disabled>Send</SendBtn>
          ) : (
            <SendBtn onClick={() => setValue(() => "")} type="submit">
              Send
            </SendBtn>
          )}
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

const CommentInput = styled.textarea`
  width: 500px;
  height: 200px;
  border: 4px solid var(--salmon);
  color: black;
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
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: var(--salmon);
  }
`;

export default Input;
