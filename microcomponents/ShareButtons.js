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

const ShareStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

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
    font-size: 1.5rem;
    font-weight: 800;
    padding: 1rem 0 0 0;
  }

  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 100;
`;

const ShareButtonContainer = styled.div`
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
`;

const ShareButton = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
`;

const StyledButtonContainer = styled.div`
  min-width: 300px;
  border-radius: 0.5rem;
  background-color: #fff;
`;

const SpacerIcon = styled.div`
  height: 45px;
  width: 45px;
`;

export const ShareButtons = props => {
  const { url, media } = props;
  const [href, setHref] = useState('');
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setHref(window.location.href);
  });
  return (
    <ShareButtonContainer>
      <ShareButton>
        <FiShare size={30} onClick={() => setOpen(true)} />
      </ShareButton>
      <ShareStyle className={isOpen ? 'hide' : 'show'}>
        <StyledButtonContainer>
          <span className="button shareTitle">Share</span>
          <div className="button">
            <TwitterShareButton url={url}>
              <TwitterIcon size={45} />
            </TwitterShareButton>
            <span>Share to Twitter</span>
          </div>
          <div className="button">
            <PinterestShareButton url={url} media={media}>
              <PinterestIcon size={45} />
            </PinterestShareButton>
            <span>Share to Pinterest</span>
          </div>
          <div className="button">
            <EmailShareButton url={href} openWindow={true}>
              <EmailIcon size={45} />
            </EmailShareButton>
            <span>Share to Email</span>
          </div>
          <div className="button" onClick={() => setOpen(false)}>
            <SpacerIcon />
            <span>Cancel</span>
          </div>
        </StyledButtonContainer>
      </ShareStyle>
    </ShareButtonContainer>
  );
};

export default ShareButtons;
