import React, { useContext, useEffect } from "react";

import styled from "styled-components";
import { AppContext } from "../Context";

const ListingComments = () => {
  const { comments, setComments } = useContext(AppContext);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch("/comments");
      const data = await res.json();
      console.log(data.data);
      setComments(data.data);
    };
    getComments();
  }, []);

  return (
    <Container>
      <Title>Comments</Title>
      <ListContainer>
        {comments.map((c) => (
          <Comment key={c._id}>
            <CommentContainer>
              <Text>{c.comment}</Text>
            </CommentContainer>
          </Comment>
        ))}
      </ListContainer>
    </Container>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Comment = styled.div``;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h2`
  color: black;
`;

const Container = styled.div`
  margin: 50px;
  display: flex;
`;

const Title = styled.h2`
  color: black;
  font-size: 24px;
`;

export default ListingComments;
