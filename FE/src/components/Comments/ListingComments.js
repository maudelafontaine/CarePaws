import React, { useContext, useEffect } from "react";

import styled from "styled-components";
import { AppContext } from "../Context";
import { IoPaw } from "react-icons/io5";
import moment from "moment";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";

const ListingComments = ({ getComments }) => {
  const { comments, currentUser } = useContext(AppContext);

  // const date = moment().format("MMM Do YY");

  useEffect(() => {
    getComments();
  }, []);

  // Takes care of deleting the comment
  const handleDelete = () => {
    console.log("clicked poubelle");
  };

  // Takes care of editing the comment
  const handleEdit = () => {
    console.log("clicked edit");
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
                  <DeleteBtn size={10} onClick={handleDelete}>
                    <FaTrashAlt />
                  </DeleteBtn>
                  <EditBtn>
                    <AiOutlineEdit size={20.1} onClick={handleEdit} />
                  </EditBtn>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: var(--green); */
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
  /* background-color: pink; */
`;

const Text = styled.h2`
  color: black;
  font-size: 22px;
  font-weight: normal;
  /* padding-left: 5px; */
  padding: 5px;
`;

const Handle = styled.h3`
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
  /* border: none; */
  background-color: white;
  padding: 5px;
  margin: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const EditBtn = styled.button`
  color: black;
  /* border: none; */
  background-color: white;
  padding: 5px;
  margin: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export default ListingComments;
