import React, { useContext, useEffect } from "react";

import styled from "styled-components";
import { AppContext } from "../Context";
import { IoPaw } from "react-icons/io5";
import moment from "moment";

const ListingComments = ({ getComments }) => {
  const { comments, currentUser, firstName } = useContext(AppContext);

  const date = moment().format("MMM Do YY");

  const filteredComments = comments.filter((comment) => {
    return comment.user === currentUser.email;
  });
  console.log(filteredComments);

  useEffect(() => {
    // const getComments = async () => {
    //   const res = await fetch("/comments");
    //   const data = await res.json();
    //   console.log(data.data);
    //   setComments(data.data);
    // };
    getComments();
  }, []);

  return (
    <Container>
      <Title>Comments</Title>
      <ListContainer>
        {comments.map((c) => (
          <Comment key={c._id}>
            <CommentContainer>
              <Logo>
                <IoPaw size={26} />
              </Logo>
              {/* <UserName>{firstName}</UserName> */}
              <Text> {c.comment}</Text>
              <Date>{date}</Date>
              {c.user === currentUser.email ? (
                <DeleteBtn>delete</DeleteBtn>
              ) : (
                <></>
              )}
            </CommentContainer>
          </Comment>
        ))}
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  /* margin: 50px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey);
  /* overflow: scroll;
  height: 700px;
  width: 600px; */
`;

const Title = styled.h2`
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 15px;
`;

const ListContainer = styled.div`
  /* height: 100%;
  width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  /* overflow: scroll;
  height: 700px;
  width: 600px; */

  /* background-color: white; */
`;

const Comment = styled.div``;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  padding: 10px;
  width: 400px;
  background-color: white;
  border-radius: 4px;
`;

const Logo = styled.div`
  margin-right: 10px;
  margin-left: 5px;
  padding: 10px;
  border-radius: 50px;
  background-color: var(--salmon);
`;

const Text = styled.h2`
  color: black;
  font-size: 22px;
  font-weight: normal;
  padding-left: 5px;
`;

const Date = styled.h3`
  color: black;
  font-weight: normal;
  font-size: 12px;
  margin-left: 15px;
`;

// const UserName = styled.h3`
//   color: black;
// `;

const DeleteBtn = styled.button`
  color: black;
`;

export default ListingComments;
