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
    width: 36px;
    height: 36px;
    position: absolute;
    right: 2rem;
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
`;

const CloseIcon = ({ onClick }) => {
  return (
    <CloseIconStyles onClick={onClick}>
      <div className="close" />
    </CloseIconStyles>
  );
};

export default CloseIcon;
