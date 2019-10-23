import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledImageCreditContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.7rem;
  p {
    margin: 0 0.3rem;
  }
`;

const ImageCredit = props => {
  const { post } = props;

  const credit = post._embedded['wp:featuredmedia'][0].caption.rendered;

  return (
    <StyledImageCreditContainer>
      {credit && (
        <Fragment>
          <span>Image by</span>
          <div
            dangerouslySetInnerHTML={{
              __html: credit
            }}
          />
        </Fragment>
      )}
    </StyledImageCreditContainer>
  );
};

export default ImageCredit;
