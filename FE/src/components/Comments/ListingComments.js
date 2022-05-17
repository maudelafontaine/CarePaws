// List of all comments
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../Context";
import { IoPaw } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

const ListingComments = ({ getComments }) => {
  const { comments, currentUser } = useContext(AppContext);

  // Get all comments
  useEffect(() => {
    getComments();
  });

  // Function used to delete a comment
  const handleDelete = async (_id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const res = await fetch(`/comments/${_id}`, requestOptions);
    const message = await res.json();

    if (message.status === 200) {
      getComments();
    }
  };

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
              <UserDataContainer>
                <Handle>@{c.user_name}</Handle>
                <Text> {c.comment}</Text>
              </UserDataContainer>
              {c.user_email === currentUser.email ? (
                <ButtonsContainer>
                  <DeleteBtn
                    size={10}
                    onClick={() => {
                      handleDelete(c._id);
                    }}
                  >
                    <FaTrashAlt />
                  </DeleteBtn>
                </ButtonsContainer>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey);
`;

const Title = styled.h2`
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 15px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  border-radius: 4px;
  background-color: white;
`;

const Logo = styled.div`
  margin-right: 10px;
  margin-left: 5px;
  padding: 10px;
  border-radius: 50px;
  background-color: var(--salmon);
`;

const UserDataContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  padding-left: 10px;
`;

const Text = styled.p`
  color: black;
  font-size: 22px;
  font-weight: normal;
  padding: 5px;
`;

const Handle = styled.p`
  color: black;
  font-size: 15px;
  font-weight: normal;
  padding: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

const DeleteBtn = styled.button`
  color: black;
  background-color: white;
  padding: 5px;
  margin: 5px;

  &:hover {
    cursor: pointer;
    background-color: var(--green);
  }
`;

export default ListingComments;
