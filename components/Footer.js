import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterNav = styled.footer`
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

  display: flex;
  justify-content: center;

  @media (min-width: 0px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

const Footer = props => {
  const { footerMenu } = props;

  const renderDivider = <span>•</span>;

  return (
    <FooterNav>
      {footerMenu.items.map((item, index) => (
        <div key={item.title}>
          {index ? renderDivider : ''}
          <Link href={`/${item.title.toLowerCase()}`}>
            <a>{item.title}</a>
          </Link>
        </div>
      ))}
    </FooterNav>
  );
};

export default Footer;
