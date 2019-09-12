import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterNav = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
  }
  a:hover {
    color: rgba(0, 0, 0, 0.6);
  }

  div {
    display: flex;
  }

  span {
    padding: 0 0.75rem;
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

const Footer = props => {
  const { footerMenu } = props;

  const renderDivider = <span>•</span>;

  return (
    <FooterNav>
      {footerMenu.items.map((item, index) => {
        const slug = item.title.toLowerCase();
        const url = item.url;

        const isExternalLink = item.type === 'custom';

        function FooterLinks() {
          if (!isExternalLink) {
            return (
              <Link as={`/${slug}`} href={`/page/${slug}`}>
                <a>{item.title}</a>
              </Link>
            );
          }
          return (
            <a href={url} target="_blank">
              {item.title}
            </a>
          );
        }

        return (
          <div key={item.title}>
            {index ? renderDivider : ''}
            <FooterLinks />
          </div>
        );
      })}
    </FooterNav>
  );
};

export default Footer;
