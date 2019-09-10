import React from 'react';
import styled from 'styled-components';

const HamburgerMenuIconStyles = styled.a`
  cursor: pointer;
  div {
    width: 35px;
    height: 3px;
    background-color: black;
    margin: 6px 0;
  }
`;

const HamburgerMenuIcon = props => {
  return (
    <HamburgerMenuIconStyles onClick={props.handleClick}>
      <div />
      <div />
      <div />
    </HamburgerMenuIconStyles>
  );
};

export default HamburgerMenuIcon;
