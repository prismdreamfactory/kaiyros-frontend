import React, { Component } from 'react';
import Link from 'next/link';
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

const ParticlesStyles = styled.div`
  @media (max-width: 768px) {
    /* display: none; */
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
    box-shadow: 0 0 5px 4px #fff, 0 0 5px 6px #2b9985, 0 0 4px 8px #4b0082;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

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

  render() {
    return (
      <Layout {...this.props}>
        <Geometry {...this.props} />

        <CategoryNavDisplay>
          <CategoryNav {...this.props} />
        </CategoryNavDisplay>

        <ParticlesStyles>
          <Particles
            style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
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
                  opacity: 0.25,
                  width: 1
                },
                opacity: {
                  value: 0.3
                },
                move: {
                  speed: 4
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
          <img src={category.acf.image.sizes.thumbnail} alt="placeholder" />
          <span className="category-title">{category.name}</span>
        </a>
      </Link>
    );
  };
}

export default PageWrapper(Index);
