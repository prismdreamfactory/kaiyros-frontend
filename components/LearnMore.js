import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../microcomponents/CloseIcon';

const LearnMoreDisplay = styled.div`
  display: flex;

  a {
    color: #000;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .hide {
    animation: opac 0.3s;
  }

  @keyframes opac {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show {
    animation: show 0s;
    animation-fill-mode: forwards;
    z-index: -100;
  }

  @keyframes show {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
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

const StyledLearnMoreContent = styled.div``;

const LearnMore = props => {
  const [isOpen, setOpen] = useState(false);
  const { category } = props;

  const openModal = () => {
    setOpen(true);

    document.querySelector('body').style.overflow = 'hidden';
  };

  const closeModal = () => {
    setOpen(false);

    document.querySelector('body').style.overflow = '';
  };

  return (
    <LearnMoreDisplay style={props.style}>
      <a
        onClick={openModal}
        dangerouslySetInnerHTML={{
          __html: category[0].name
        }}
      />
      <StyledLearnMore className={isOpen ? 'hide' : 'show'}>
        <CloseIcon onClick={closeModal} />

        <StyledLearnMoreContainer>
          <h2 className="title">{props.category[0].description}</h2>
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

          <StyledLearnMoreContent
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
