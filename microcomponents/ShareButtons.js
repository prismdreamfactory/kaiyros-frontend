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

  const renderShareButtons = () => (
    <ShareStyle className={isOpen ? 'hide' : 'show'}>
      <ShareButtonsContainer>
        <span className="button shareTitle">Share</span>

        <div className="share-icon-wrapper">
          <TwitterShareButton className="button" url={url}>
            <TwitterIcon size={45} />
          </TwitterShareButton>

          <PinterestShareButton className="button" url={url} media={media}>
            <PinterestIcon size={45} />
          </PinterestShareButton>

          <EmailShareButton className="button" url={href} openWindow={true}>
            <EmailIcon size={45} />
          </EmailShareButton>
        </div>

        <div className="button cancelButton" onClick={() => setOpen(false)}>
          <span>Cancel</span>
        </div>
      </ShareButtonsContainer>
    </ShareStyle>
  );

  return (
    <ShareContainer>
      <ShareIcon>
        <FiShare size={30} onClick={() => setOpen(true)} />
      </ShareIcon>

      {renderShareButtons()}
    </ShareContainer>
  );
};

const ShareContainer = styled.div`
  margin-top: auto;

  .hide {
    animation: opac 0.3s;
  }

  @keyframes opac {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show {
    animation: show 0s;
    animation-fill-mode: forwards;
    z-index: -100;
  }

  @keyframes show {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .share-icon-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 30px;
  }
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
    font-weight: 800;
    padding: 1rem 0 0 0;
  }

  .cancelButton {
    justify-content: center;
    padding-bottom: 1rem;
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
