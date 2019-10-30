import React from 'react';
import styled from 'styled-components';

const CloseIconStyles = styled.a`
  :hover {
    .close:before {
      border-left: 2px solid #2b9985;
    }
    .close:after {
      border-left: 2px solid #2b9985;
    }
  }
  .close {
    position: fixed;
    width: 56px;
    height: 56px;
    right: 1rem;
    top: 2rem;
    cursor: pointer;
  }

  .close:before {
    content: '';
    height: 36px;
    border-left: 2px solid #000;
    position: absolute;
    transform: rotate(-45deg);
    left: 28px;
  }
  .close:after {
    content: '';
    height: 36px;
    border-left: 2px solid #000;
    position: absolute;
    transform: rotate(45deg);
    left: 28px;
  }

  .fixed {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const CloseIcon = ({ onClick, fixed }) => {
  console.log(fixed);
  return (
    <CloseIconStyles onClick={onClick}>
      <div className={`close ${fixed ? 'fixed' : ''}`} />
    </CloseIconStyles>
  );
};

export default CloseIcon;
