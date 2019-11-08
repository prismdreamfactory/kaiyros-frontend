import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
  TwitterIcon,
  PinterestIcon,
  EmailIcon
} from 'react-share';
import { FiShare } from 'react-icons/fi';

export const ShareButtons = props => {
  const { url, media } = props;
  const [href, setHref] = useState('');
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setHref(window.location.href);
  });

  const renderShareLinks = () => (
    <ShareStyle className={isOpen ? 'show' : 'hide'}>
      <ShareButtonsContainer>
        <span className="button shareTitle">Share</span>

        <div className="share-icon-wrapper">
          <TwitterShareButton className="button" url={url}>
            <TwitterIcon size={45} />
          </TwitterShareButton>

          <PinterestShareButton className="button" url={url} media={media}>
            <PinterestIcon size={45} />
          </PinterestShareButton>

          <a href="mailto:jaspr@kaiyros.net" target="_blank">
            <div className="button">
              <EmailIcon size={45} />
            </div>
          </a>
        </div>

        <div className="button cancelButton" onClick={() => setOpen(false)}>
          <span>Cancel</span>
        </div>
      </ShareButtonsContainer>
    </ShareStyle>
  );

  return (
    <ShareContainer>
      <ShareButton onClick={() => setOpen(true)}>
        {/* <ShareText>Share</ShareText> */}

        <ShareIcon>
          <FiShare size={25} />
        </ShareIcon>
      </ShareButton>

      {renderShareLinks()}
    </ShareContainer>
  );
};

const ShareContainer = styled.div`
  .hide {
    display: none;
    animation: opac 0.3s;
  }

  @keyframes opac {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .show {
    display: flex;
    animation: show 0s;
    animation-fill-mode: forwards;
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ShareButton = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;
`;

const ShareText = styled.span`
  margin-right: 0.5rem;
`;

const ShareStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  box-sizing: border-box;
  z-index: 100;

  path {
    fill: #000;
  }

  .button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    rect {
      fill: #fff;
    }
    :hover {
      path {
        fill: #2b9985;
      }
    }
  }

  .shareTitle {
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem 0 0 0;
  }

  .cancelButton {
    justify-content: center;
    padding-bottom: 1rem;
  }

  .share-icon-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 30px;
  }
`;

const ShareIcon = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`;

const ShareButtonsContainer = styled.div`
  min-width: 300px;
  border-radius: 0.5rem;
  background-color: #fff;
`;

export default ShareButtons;
