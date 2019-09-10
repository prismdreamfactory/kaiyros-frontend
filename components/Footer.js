import React from 'react';
import Link from 'next/link';
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
    <Link href="/about">
      <a>About • </a>
    </Link>
    <Link href="/contact">
      <a>Contact • </a>
    </Link>
    <Link href="/connect">
      <a>Connect</a>
    </Link>
  </FooterNav>
);

export default Footer;
