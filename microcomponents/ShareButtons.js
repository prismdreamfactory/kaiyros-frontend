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

  path {
    fill: #000;
  }

  .button {
    cursor: pointer;
    rect {
      fill: #fff;
    }
    :hover {
      path {
        fill: #2b9985;
      }
    }
  }
`;

export const ShareButtons = props => {
  const { url, media } = props;
  return (
    <ShareStyle>
      <div className="button">
        <TwitterShareButton url={url}>
          <TwitterIcon size={45} />
        </TwitterShareButton>
      </div>
      <div className="button">
        <PinterestShareButton url={url} media={media}>
          <PinterestIcon size={45} />
        </PinterestShareButton>
      </div>
    </ShareStyle>
  );
};

export default ShareButtons;
