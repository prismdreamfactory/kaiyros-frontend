// Geometry.js
// renders sacred geometry design for site navigation

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Tilt from 'react-tilt';

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
    title: 'Letters to Human Family',
    text:
      'words to family, words of comfort, philosophy, inner dialogue, faith, stream of consciousness, pure expression, Connection to God, Pure divination through surrender and conscious navigation'
  },
  {
    placement: 'top',
    url: 'science-of-spirit',
    title: 'Science of Spirit',
    text:
      '"science and nonduality, quantum, entanglement, morphic resonance field, schumann resonance, what happens to our body and brain when we: a.,b.,c., etc.'
  },
  {
    placement: 'top',
    url: 'social-impact',
    title: 'Social Impact',
    text:
      'NPO, NGO, culture, art, music, race, gender, politics, systemic institutions, organization of people groups, societal labels, counter culture'
  },
  {
    placement: 'bottom',
    url: 'human-tech',
    title: 'Human Tech',
    text:
      'addiction, depression, anxiety, paranoia, wellness, balance, joy, acceptance, gratitude'
  },
  {
    placement: 'bottom',
    url: 'integrative-mental-health',
    title: 'Conscious Tech',
    text:
      'A.I., Consciousness Hacking, P.E.A.C.E. Museum, Psyche x Technology, HeartMath, biometric tech, bioenergetic tech, NES Health?, AR/VR'
  },
  {
    placement: 'bottom',
    url: 'metaphysics-of-healing',
    title: 'Metaphysics of Healing',
    text: 'This is a letter to humanity'
  },
  {
    placement: 'bottom',
    url: 'practical-self',
    title: 'Practical Self',
    text: 'This is a letter to humanity'
  }
];

export const Geometry = () => {
  const renderChakras = items =>
    items.map((item, index) => {
      const { placement, url, title, text } = item;

      return (
        <div key={url}>
          <Link href={`/category/${url}`}>
            <a className={`shape shape${index + 1}`}>
              <img
                className={index === 0 ? '' : 'rotate'}
                src={`../static/images/sacredgeo${index + 1}.svg`}
                alt="{title}"
              />
              <span className="text">{title}</span>
            </a>
          </Link>
        </div>
      );
    });

  return (
    <Tilt options={{ scale: 1, max: 5, perspective: 850 }}>
      <GeometryStyles>
        <div className="content">{renderChakras(chakras)}</div>
      </GeometryStyles>
    </Tilt>
  );
};

export default Geometry;
