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

  span {
    padding: 0 0.75rem;
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

const Footer = props => {
  const { footerMenu } = props;
  console.log('foot', footerMenu);
  return (
    <FooterNav>
      {footerMenu.items.map(footerlink => (
        <Link href={footerlink.url}>
          <a>{footerlink.title}</a>
        </Link>
      ))}
      <span>•</span>
    </FooterNav>
  );
};

export default Footer;
