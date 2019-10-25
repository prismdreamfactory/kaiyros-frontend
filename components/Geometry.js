// Geometry.js
// renders sacred geometry design for site navigation

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Tilt from 'react-tilt';
import Tooltip from '@material-ui/core/Tooltip';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from '@material-ui/core/styles';
import Typist from 'react-typist';

const GeometryStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  z-index: 0;
  opacity: 1;

  @media (min-width: 1024px) {
    max-width: 80vh;
    margin: 0 auto;
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    display: none;
    /* position: fixed;
    top: 25vh;
    left: 0;
    right: 0;
    opacity: 0.05;
    pointer-events: none;
    z-index: -1; */
  }

  a {
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 1000;
    color: #000;

    &:hover {
      transform: scale(1.05);
    }
  }

  img {
    position: relative;
    z-index: 1;
    /* box-shadow: 0 0 5px 10px #fff, 0 0 10px 7px #2b9985; */
    /* box-shadow: 0 0 5px 6px #fff, 0 0 10px 10px #2b9985, 0 0 2px 10px #4b0082; */
    /* box-shadow: 0 0 5px 5px #fff, 0 0 1px 9px #2b9985, 0 0 9px 11px #4b0082; */
    box-shadow: 0 0 2px 4px #fff, 0 0 5px 10px #2b9985, 0 0 18px 13px #4b0082;

    border-radius: 50%;
  }

  .content {
    position: relative;
    background-image: url('../static/images/frame.svg');
    background-repeat: no-repeat;
    padding-bottom: 100%;
    width: 100%;
    height: auto;
  }

  .shape {
    position: absolute;
    width: 17%;
  }
  .shape1 {
    position: absolute;
    top: 0%;
    left: 40.7%;
    width: 18.5%;
    span {
      background: #fff;
    }
  }
  .shape2 {
    top: 21.3%;
    left: 18%;
  }
  .shape3 {
    top: 21.3%;
    left: 63.7%;
  }
  .shape4 {
    top: 40.5%;
    left: 0%;
  }
  .shape5 {
    top: 40.5%;
    left: 41.3%;
  }
  .shape6 {
    top: 40.5%;
    left: 83%;
  }
  .shape7 {
    top: 69.6%;
    left: 41.3%;
  }

  span {
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0);
    margin-top: 0.75rem;
    width: 110%;
    left: -5%;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .rotate {
    animation-name: spin;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.9rem'
      }
    }
  }
});

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    color: 'rgba(0, 0, 0, 0.95)',
    boxShadow: theme.shadows[1],
    fontSize: 16,
    minWidth: 350,
    textAlign: 'center',
    fontFamily: `Georgia, 'Times New Roman', Times, serif, serif`
  }
}))(Tooltip);

export const Geometry = props => {
  const { categories } = props;

  const renderChakras = () =>
    categories.map((category, index) => {
      const placement = category.acf.placement;
      const title = category.name;
      const slug = category.slug;
      const image = category.acf.image.sizes.thumbnail;
      const cursor = {
        hideWhenDone: true,
        hideWhenDoneDelay: 100
      };
      const text = (
        <Typist avgTypingDelay={35} stdTypingDelay={0} cursor={cursor}>
          {category.acf.text}
        </Typist>
      );

      const [playAudio, renderAudio] = useState(false);
      let audio;
      if (playAudio) {
        audio = (
          <audio autoPlay={true} loop={true}>
            <source src="" type="audio/mp3" />
          </audio>
        );
      } else {
        audio = '';
      }

      return (
        <div
          key={slug}
          onMouseEnter={() => renderAudio(true)}
          onMouseLeave={() => renderAudio(false)}
        >
          <Link href={`/category/${slug}`}>
            <a className={`shape shape${index + 1}`}>
              <MuiThemeProvider theme={theme}>
                <LightTooltip title={text} placement="top">
                  <img
                    className={index === 6 ? '' : 'rotate'}
                    src={image}
                    alt="{title}"
                  />
                </LightTooltip>
              </MuiThemeProvider>
              {audio}
              <span
                dangerouslySetInnerHTML={{
                  __html: category.name
                }}
              />
            </a>
          </Link>
        </div>
      );
    });

  return (
    <Tilt options={{ scale: 1, max: 5, perspective: 850 }}>
      <GeometryStyles>
        <div className="content">{renderChakras()}</div>
      </GeometryStyles>
    </Tilt>
  );
};

export default Geometry;
