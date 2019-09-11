// Geometry.js
// renders sacred geometry design for site navigation

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Tilt from 'react-tilt';
import ReactTooltip from 'react-tooltip';

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
    position: fixed;
    top: 25vh;
    left: 0;
    right: 0;
    opacity: 0.05;
    pointer-events: none;
    z-index: -1;
  }

  a {
    text-decoration: none;
    font-size: 1.6vh;
    color: #000;

    &:hover {
      transform: scale(1.1);
    }
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
    background-color: #fff;
    width: 100%;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .rotate {
    animation-name: spin;
    animation-duration: 60s;
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

const chakras = [
  {
    placement: 'right',
    url: 'letters-to-human-family',
    image: 'sacredgeo1.svg',
    title: 'Letters to Human Family',
    text: 'This is a letter to humanity'
  },
  {
    placement: 'right',
    url: 'science-of-spirit',
    image: 'sacredgeo2.svg',
    title: 'Science of Spirit',
    text: 'This is a letter to humanity'
  },
  {
    placement: 'left',
    url: 'social-impact',
    image: 'sacredgeo3.svg',
    title: 'Social Impact',
    text: 'This is a letter to humanity'
  },
  {
    placement: 'right',
    url: 'human-tech',
    image: 'sacredgeo4.svg',
    title: 'Human Tech',
    text: 'This is a letter to humanity'
  },
  {
    placement: 'right',
    url: 'integrative-mental-health',
    image: 'sacredgeo5.svg',
    title: 'Integrative Mental Health',
    text: 'This is a letter to humanity'
  },
  {
    placement: 'left',
    url: 'metaphysics-of-healing',
    image: 'sacredgeo6.svg',
    title: 'Metaphysics of Healing',
    text: 'This is a letter to humanity'
  },
  {
    placement: 'right',
    url: 'practical-self',
    image: 'sacredgeo7.svg',
    title: 'Practical Self',
    text: 'This is a letter to humanity'
  }
];

export const Geometry = () => {
  const renderChakras = items =>
    items.map((item, index) => {
      const { placement, url, image, title, text } = item;

      return (
        <div key={url}>
          <Link href={`/category/${url}`}>
            <a className={`shape shape${index + 1}`} data-tip data-for={url}>
              <img
                className={index === 0 ? '' : 'rotate'}
                src={`../static/images/${image}`}
                alt="{title}"
              />
              <span className="text">{title}</span>
            </a>
          </Link>

          <ReactTooltip id={url} type="dark" effect="solid" place={placement}>
            <p>{text}</p>
          </ReactTooltip>
        </div>
      );
    });

  return (
    <Tilt options={{ scale: 1, max: 5, perspective: 850 }}>
      <GeometryStyles>
        <div className="content">
          {renderChakras(chakras)}

          {/* <Link href={`/category/letters-to-human-family`}>
            <a className="shape shape1" data-tip data-for="letters">
              <img
                // className="rotate"
                src="../static/images/sacredgeo1.svg"
                alt=""
              />
              <span className="text">Letters to Human Family</span>
            </a>
          </Link>

          <ReactTooltip id="letters" type="dark" effect="solid">
            <p>This is a letter to humaniy</p>
          </ReactTooltip>

          <Link href={`/category/science-of-spirit`}>
            <a className="shape shape2">
              <img
                className="rotate"
                src="../static/images/sacredgeo2.svg"
                alt=""
              />
              <span>Science of Spirit</span>
            </a>
          </Link>
          <Link href={`/category/social-impact`}>
            <a className="shape shape3">
              <img
                className="rotate"
                src="../static/images/sacredgeo3.svg"
                alt=""
              />
              <span>Social Impact</span>
            </a>
          </Link>
          <Link href="/category/human-tech">
            <a className="shape shape4">
              <img
                className="rotate"
                src="../static/images/sacredgeo4.svg"
                alt=""
              />
              <span>Human Tech</span>
            </a>
          </Link>
          <Link href="/category/integrative-mental-health">
            <a className="shape shape5">
              <img
                className="rotate"
                src="../static/images/sacredgeo5.svg"
                alt=""
              />
              <span>Integrative Mental Health</span>
            </a>
          </Link>
          <Link href="/category/metaphysics-of-healing">
            <a className="shape shape6">
              <img
                className="rotate"
                src="../static/images/sacredgeo6.svg"
                alt=""
              />
              <span>Metaphysics of Healing</span>
            </a>
          </Link>
          <Link href="/category/practical-self">
            <a className="shape shape7">
              <img
                className="rotate"
                src="../static/images/sacredgeo7.svg"
                alt=""
              />
              <span>Practical Self</span>
            </a>
          </Link> */}
        </div>
      </GeometryStyles>
    </Tilt>
  );
};

export default Geometry;
