import React from 'react';
import styled from 'styled-components';

const HamburgerMenuIconStyles = styled.a`
  cursor: pointer;
  div {
    width: 36px;
    height: 2px;
    background-color: black;
    margin: 7px 0;
  }
  :hover {
    div {
      background-color: #2b9985;
    }
  }
`;

const HamburgerMenuIcon = ({ onClick }) => {
  return (
    <HamburgerMenuIconStyles onClick={onClick}>
      <div />
      <div />
      <div />
    </HamburgerMenuIconStyles>
  );
};

export default HamburgerMenuIcon;
