// Geometry.js
// renders sacred geometry design for site navigation

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Tilt from 'react-tilt';

const GeometryStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 3rem;
  z-index: 0;

  @media (min-width: 1024px) {
    max-width: 80vh;
    margin: 0 auto;
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
    text-align: center;
    background-color: #fff;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .rotate {
    -webkit-animation-name: spin;
    -webkit-animation-duration: 60s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 60s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 60s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;

    animation-name: spin;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
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

export const Geometry = () => {
  return (
    <Tilt options={{ scale: 1, max: 5, perspective: 750 }}>
      <GeometryStyles>
        <div className="content">
          <Link href={`/category/letters-to-human-family`}>
            <a className="shape shape1">
              <img
                className="rotate"
                src="../static/images/sacredgeo1.svg"
                alt=""
              />
              <span className="text">Letters to Human Family</span>
            </a>
          </Link>

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
          </Link>
        </div>
      </GeometryStyles>
    </Tilt>
  );
};

export default Geometry;
