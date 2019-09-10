import React from 'react';
import styled from 'styled-components';

const CloseIconStyles = styled.a`
  display: flex;
  justify-content: flex-end;

  .close {
    padding: 0 1rem;
    width: 40px;
    height: 40px;
    position: relative;
    cursor: pointer;
  }

  .close:before {
    content: '';
    height: 40px;
    border-left: 2px solid #000;
    position: absolute;
    transform: rotate(-45deg);
    left: 28px;
  }
  .close:after {
    content: '';
    height: 40px;
    border-left: 2px solid #000;
    position: absolute;
    transform: rotate(45deg);
    left: 28px;
  }
`;

const CloseIcon = props => {
  return (
    <CloseIconStyles onClick={props.handleClick}>
      <div className="close" />
    </CloseIconStyles>
  );
};

export default CloseIcon;
