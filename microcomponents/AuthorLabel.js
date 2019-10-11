import React from 'react';
import styled from 'styled-components';

const Author = styled.span`
  background-color: #3debcb;
  padding: 0.4rem;
`;

const AuthorLabel = props => {
  const { posts } = props;

  const postArray = posts.find(post => post.author !== null);

  return <Author>by {postArray._embedded.author[0].name}</Author>;
};

export default AuthorLabel;
