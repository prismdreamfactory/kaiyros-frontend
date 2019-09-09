// Geometry.js
// renders sacred geometry design for site navigation

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const GeometryStyles = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    font-size: 1.6vh;
    color: #000;
  }

  .content {
    position: relative;
    background-image: url('../static/images/frame.svg');
    background-repeat: no-repeat;
    height: 80vh;
    width: 80vh;
    margin-top: -6%;
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

  .text {
    position: absolute;
    display: flex;
    text-align: center;
    background-color: #fff;
  }

  .text1 {
    top: 22%;
    left: 42.8%;
  }
  .text2 {
    top: 39%;
    left: 19%;
  }
  .text3 {
    top: 39%;
    left: 66%;
  }
  .text4 {
    top: 58%;
    left: 2.5%;
  }
  .text5 {
    top: 58%;
    left: 44%;
  }
  .text6 {
    top: 58%;
    left: 84.5%;
  }
  .text7 {
    top: 88%;
    left: 44%;
  }

  .rotate:hover {
    -webkit-animation-name: spin;
    -webkit-animation-duration: 15s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 15s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 15s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;

    animation-name: spin;
    animation-duration: 15s;
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
    <GeometryStyles>
      <div className="content">
        <Link
          as={`/category/letters-to-human-family`}
          href={`/category/letters-to-human-family`}
        >
          <a href="/category/letters-to-human-family">
            <img
              className="rotate shape1"
              src="../static/images/sacredgeo1.svg"
              alt=""
            />
          </a>
        </Link>
        <a className="text text1" href="/category/letters-to-human-family">
          Letters to <br /> Human Family
        </a>
        <a href="/category/science-of-spirit">
          <img
            className="rotate shape shape2"
            src="../static/images/sacredgeo2.svg"
            alt=""
          />
        </a>
        <a className="text text2" href="/category/science-of-spirit">
          Science of Spirit
        </a>
        <a href="/category/social-impact">
          <img
            className="rotate shape shape3"
            src="../static/images/sacredgeo3.svg"
            alt=""
          />
        </a>
        <a className="text text3" href="/category/social-impact">
          Social Impact
        </a>
        <a href="/category/human-tech">
          <img
            className="rotate shape shape4"
            src="../static/images/sacredgeo4.svg"
            alt=""
          />
        </a>
        <a className="text text4" href="/category/human-tech">
          Human Tech
        </a>
        <a href="/category/integrative-mental-health">
          <img
            className="rotate shape shape5"
            src="../static/images/sacredgeo5.svg"
            alt=""
          />
        </a>
        <a className="text text5" href="/category/integrative-mental-health">
          Integrative <br /> Mental Health
        </a>
        <a href="/category/metaphysics-of-healing">
          <img
            className="rotate shape shape6"
            src="../static/images/sacredgeo6.svg"
            alt=""
          />
        </a>
        <a className="text text6" href="/category/metaphysics-of-healing">
          Metaphysics of <br /> Healing
        </a>
        <a href="/category/practical-self">
          <img
            className="shape shape7"
            src="../static/images/sacredgeo7.svg"
            alt=""
          />
        </a>
        <a className="text text7" href="/category/practical-self">
          Practical Self
        </a>
      </div>
    </GeometryStyles>
  );
};

export default Geometry;
