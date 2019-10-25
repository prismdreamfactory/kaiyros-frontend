import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
// import Router from 'next/router';
import WPAPI from 'wpapi';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Config from '../config';
import Geometry from '../components/Geometry';
import Particles from 'react-particles-js';
import { CategoryNav } from '../components/CategoryNav';

const wp = new WPAPI({ endpoint: Config.apiUrl });

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

class Index extends Component {
  static async getInitialProps() {
    try {
      const [posts, pages] = await Promise.all([
        wp.posts().embed(),
        wp.pages().embed()
      ]);

      return { posts, pages };
    } catch (err) {
      // if (err.data.status === 403) {
      // tokenExpired();
      // }
    }

    return null;
  }

  // state = {
  //   windowDimensions: null
  // }

  // componentDidMount() {
  //   window.addEventListener('resize', handleResize);

  //   return () => window.removeEventListener('resize', handleResize);
  // }

  handleResize = () => {
    this.setState(windowDimensions, getWindowDimensions());
  };

  render() {
    return (
      <Layout {...this.props}>
        <Head>
          <title>Home</title>
          <meta name="description" content="" />
        </Head>

        <Geometry {...this.props} />

        <CategoryNavDisplay>
          <CategoryNav {...this.props} displaySubtitle />
        </CategoryNavDisplay>

        <ParticlesStyles>
          <Particles
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
              right: 0,
              bottom: 0
            }}
            // width={}
            params={{
              particles: {
                number: {
                  value: 70,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: '#000000'
                },
                size: {
                  value: 2
                },
                line_linked: {
                  color: '#000000',
                  opacity: 0.2,
                  width: 1
                },
                opacity: {
                  value: 0.15
                },
                move: {
                  speed: 1.5
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'repulse'
                  }
                }
              }
            }}
          />
        </ParticlesStyles>
      </Layout>
    );
  }

  renderCategoryLinks = category => {
    return (
      <Link href={`/category/${category.slug}`} key={category.id}>
        <a>
          <img
            className="rotate"
            src={category.acf.image.sizes.thumbnail}
            alt="placeholder"
          />
          <span
            className="category-title"
            dangerouslySetInnerHTML={{
              __html: category.name
            }}
          />
        </a>
      </Link>
    );
  };
}

const ParticlesStyles = styled.div`
  @media (max-width: 768px) {
  }
`;

const CategoryNavDisplay = styled.div`
  display: none;
  padding: 2rem 0;

  img {
    position: relative;
    z-index: 1;
    /* box-shadow: 0 0 5px 10px #fff, 0 0 10px 7px #2b9985; */
    /* box-shadow: 0 0 5px 6px #fff, 0 0 10px 10px #2b9985, 0 0 2px 10px #4b0082; */
    /* box-shadow: 0 0 5px 5px #fff, 0 0 1px 9px #2b9985, 0 0 9px 11px #4b0082; */
    box-shadow: 0 0 5px 4px #fff, 0 0 4px 6px #2b9985, 0 0 10px 8px #4b0082;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export default PageWrapper(Index);
