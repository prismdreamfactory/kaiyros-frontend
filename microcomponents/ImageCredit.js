import React from 'react';
import styled from 'styled-components';

const StyledImageCreditContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1rem;
  p {
    margin: 0 0.3rem;
    font-size: 1rem;
  }
`;

const ImageCredit = props => {
  const { post } = props;

  console.log(props);
  console.log(post._embedded['wp:featuredmedia'][0].caption.rendered);

  return (
    <StyledImageCreditContainer>
      <span>Image by</span>
      <div
        dangerouslySetInnerHTML={{
          __html: post._embedded['wp:featuredmedia'][0].caption.rendered
        }}
      />
    </StyledImageCreditContainer>
  );
};

export default ImageCredit;
