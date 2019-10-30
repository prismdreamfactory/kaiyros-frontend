import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import SocialIcons from '../microcomponents/SocialIcons';

const FooterNav = styled.footer`
  a {
    text-decoration: none;
    color: #000 !important;
    font-size: 1.3rem;
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

  .social {
    display: none;
    margin: 2rem 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .social {
      display: flex;
    }
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

      <div className="social">
        <SocialIcons />
      </div>
    </FooterNav>
  );
};

export default Footer;
