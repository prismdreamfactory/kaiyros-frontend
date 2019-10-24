import React from 'react';
import styled from 'styled-components';

const Biblio = styled.div``;

const Author = styled.span`
  font-size: 0.8rem;
  padding: 0.4rem;
  display: inline-block;
`;

const AuthorLabel = props => {
  const { post } = props;

  return (
    <Biblio>
      <Author>by {post._embedded.author[0].name}</Author>
    </Biblio>
  );
};

export default AuthorLabel;
