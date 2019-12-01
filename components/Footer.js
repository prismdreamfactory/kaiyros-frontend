import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import SocialIcons from '../microcomponents/SocialIcons';

const Footer = props => {
  const { footerMenu } = props;
  const renderDivider = <span>•</span>;

  const [center, setCenter] = useState(false);
  const [origin, setOrigin] = useState('');
  const [href, setHref] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin + '/');
    setHref(window.location.href);
  });

  if (props.isCenter === true) {
    useEffect(() => {
      setCenter(true);
    });
  }

  return (
    <FooterNav className={href === origin && 'fixed'}>
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
            <div key={item.title} className="footer__link">
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

const FooterNav = styled.footer`
  padding: 2rem 0;

  @media (min-width: 1024px) {
    &.fixed {
      position: fixed;
      right: 40px;
      bottom: 0;
    }
  }

  @media (max-height: 800px) {
    padding: 1rem 0;
  }

  a {
    text-decoration: none;
    color: #000 !important;
    font-size: 1.5rem;

    @media (max-height: 800px) {
      font-size: 1.2rem;
    }
  }
  a:hover {
    color: rgba(0, 0, 0, 0.6);
  }

  div {
    display: flex;
  }

  span {
    padding: 0 0.75rem;
    margin-top: 0.1em;
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

  .footer__link {
    align-items: center;
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

export default Footer;
