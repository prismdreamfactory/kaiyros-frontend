import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../microcomponents/CloseIcon';
import CategoryTitle from '../microcomponents/CategoryTitle';

const LearnMoreDisplay = styled.div`
  text-align: left;

  a {
    color: #000;
    cursor: pointer;
    font-size: 1.5rem;
    border-bottom: 0.2px solid #000;
  }

  .hide {
    display: none;
    animation: opac 0.3s;
  }

  @keyframes opac {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .show {
    display: flex;
    animation: show 0s;
    animation-fill-mode: forwards;
    /* z-index: -100; */
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledLearnMore = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 100;
`;

const StyledLearnMoreProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0 2rem 0;

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
  max-width: 900px;
  height: 80%;
  overflow-y: scroll;
  padding: 20px;

  h2 {
    text-decoration: underline;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const LearnMore = props => {
  const { category } = props;

  return (
    <LearnMoreDisplay>
      <StyledLearnMore className={props.isOpen ? 'show' : 'hide'}>
        <CloseIcon onClick={props.closeModal} />

        <StyledLearnMoreContainer>
          <div className="category-title-wrapper">
            <CategoryTitle
              title={props.category[0].name}
              subtitle={category[0].description}
              image={category[0].acf.image.sizes.medium}
            />
          </div>

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
    </LearnMoreDisplay>
  );
};

export default LearnMore;
