import React from 'react';
import styled, { keyframes } from 'styled-components';
import CloseIcon from '../microcomponents/CloseIcon';
import CategoryTitle from '../microcomponents/CategoryTitle';

const LearnMore = props => {
  const { category, isOpen } = props;

  return (
    <StyledLearnMore isOpen={isOpen}>
      <CloseIcon onClick={props.closeModal} fixed />

      <StyledLearnMoreContainer>
        <CategoryTitle
          title={props.category[0].name}
          subtitle={category[0].description}
          image={category[0].acf.image.sizes.medium}
        />

        <StyledLearnMoreProfile>
          <div className="profile-content">
            <h3>Profile</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: category[0].acf.profile
              }}
            />
          </div>
        </StyledLearnMoreProfile>

        <div
          dangerouslySetInnerHTML={{
            __html: category[0].acf.learn_more
          }}
        />
      </StyledLearnMoreContainer>
    </StyledLearnMore>
  );
};

const StyledLearnMore = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  position: fixed;
  top: 0;
  right: 0;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 100;
  text-align: left;

  display: ${props => (props.isOpen ? 'flex' : 'none')};
  animation: ${props => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease;
  transition: 0.3s ease;

  a {
    color: #000;
    cursor: pointer;
    font-size: 1.5rem;
    /* border-bottom: 0.2px solid #000; */
  }
`;

const StyledLearnMoreProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0 4rem 0;

  @media (max-width: 768px) {
    padding: 1rem 0 2rem 0;
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    text-decoration: underline;
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .profile-content {
    border: 0.2px solid #000;
    padding: 1rem;
  }
`;

const StyledLearnMoreContainer = styled.div`
  max-width: 850px;
  height: 90%;
  overflow-y: scroll;
  padding: 0 3rem;

  h2 {
    /* text-decoration: underline; */
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export default LearnMore;
