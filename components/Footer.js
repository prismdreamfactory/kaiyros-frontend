import React from 'react';
import styled from 'styled-components';

const FooterNav = styled.div`
  padding: 2.5rem;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    margin-right: 0.5rem;
  }
  a:hover {
    color: rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

const Footer = () => (
  <FooterNav>
    <a href="/page/about">About • </a>
    <a href="/page/contact">Contact • </a>
    <a href="/page/connect">Connect</a>
  </FooterNav>
);

export default Footer;
