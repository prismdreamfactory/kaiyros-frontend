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

  const renderLink = item => (
    <Link href={`/${item.title.toLowerCase()}`} key={item.title}>
      <a>{item.title}</a>
    </Link>
  );

  const divider = <span>•</span>;

  return (
    <FooterNav>
      {footerMenu.items.map((item, index) => (
        <div>
          {index ? divider : ''}
          {renderLink(item)}
        </div>
      ))}
    </FooterNav>
  );
};

export default Footer;
