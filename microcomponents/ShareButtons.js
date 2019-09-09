import React from 'react';
import styled from 'styled-components';
import {
  TwitterShareButton,
  PinterestShareButton,
  TwitterIcon,
  PinterestIcon
} from 'react-share';

const ShareStyle = styled.div`
  display: flex;
  justify-content: flex-end;

  .button {
    cursor: pointer;
    rect {
      fill: #000;
    }
    :hover {
      rect {
        fill: #2b9985;
      }
    }
    margin-right: 0.3rem;
  }
`;

export const ShareButtons = props => {
  const { url, media } = props;
  return (
    <ShareStyle>
      <div className="button">
        <TwitterShareButton url={url}>
          <TwitterIcon size={32} borderRadius={10} />
        </TwitterShareButton>
      </div>
      <div className="button">
        <PinterestShareButton url={url} media={media}>
          <PinterestIcon size={32} borderRadius={10} />
        </PinterestShareButton>
      </div>
    </ShareStyle>
  );
};

export default ShareButtons;
