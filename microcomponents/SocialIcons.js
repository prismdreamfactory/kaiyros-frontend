import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const SocialIconsStyles = styled.div`
  display: flex;

  a {
    display: flex;
  }

  svg {
    color: #000;
    margin-right: 1.25rem;
    width: 25px;
    height: 25px;
  }

  svg:hover {
    color: #2b9985;
  }

  @media (max-width: 768px) {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const SocialIcons = () => {
  return (
    <SocialIconsStyles>
      <a
        href="https://www.instagram.com/kaiyros_27/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/kaiyros_27"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.pinterest.com/kaiyros_27/?eq=kaiyros&etslf=4567"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPinterest />
      </a>
    </SocialIconsStyles>
  );
};

export default SocialIcons;
