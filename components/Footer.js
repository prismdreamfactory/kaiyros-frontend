import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterNav = styled.footer`
  padding: 20px 0;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    font-size: 1.2rem;
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

  .center {
    justify-content: center;
  }

  .end {
    justify-content: flex-end;
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

const Footer = props => {
  const { footerMenu } = props;
  const renderDivider = <span>•</span>;

  const [center, setCenter] = useState(false);

  if (props.isCenter === true) {
    useEffect(() => {
      setCenter(true);
    });
  }

  return (
    <FooterNav>
      <div className={center ? 'center' : 'end'}>
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
      </div>
    </FooterNav>
  );
};

export default Footer;
