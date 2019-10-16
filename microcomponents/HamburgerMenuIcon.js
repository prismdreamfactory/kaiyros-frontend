import React, { useState, useEffect } from 'react';
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
  .none {
    display: none;
  }
`;

const HamburgerMenuIcon = ({ onClick }) => {
  const [origin, setOrigin] = useState('');
  const [href, setHref] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin + '/');
    setHref(window.location.href);
  });

  return (
    <HamburgerMenuIconStyles onClick={onClick}>
      <span className={href !== origin ? '' : 'none'}>
        <div />
        <div />
        <div />
      </span>
    </HamburgerMenuIconStyles>
  );
};

export default HamburgerMenuIcon;
