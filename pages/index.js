import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
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
    display: none;
  }
`;

const CategoryNavDisplay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const tokenExpired = () => {
  if (process.browser) {
    localStorage.removeItem(Config.AUTH_TOKEN);
  }
  wp.setHeaders('Authorization', '');
  Router.push('/login');
};

class Index extends Component {
  state = {
    id: ''
  };

  static async getInitialProps() {
    try {
      const [page, posts, pages] = await Promise.all([
        wp
          .pages()
          .slug('welcome')
          .embed()
          .then(data => {
            return data[0];
          }),
        wp.posts().embed(),
        wp.pages().embed()
      ]);

      return { page, posts, pages };
    } catch (err) {
      if (err.data.status === 403) {
        tokenExpired();
      }
    }

    return null;
  }

  componentDidMount() {
    const token = localStorage.getItem(Config.AUTH_TOKEN);
    if (token) {
      wp.setHeaders('Authorization', `Bearer ${token}`);
      wp.users()
        .me()
        .then(data => {
          const { id } = data;
          this.setState({ id });
        })
        .catch(err => {
          if (err.data.status === 403) {
            tokenExpired();
          }
        });
    }
  }

  render() {
    const { id } = this.state;
    const { posts, pages, headerMenu, page, categories } = this.props;

    return (
      <Layout {...this.props}>
        <Geometry />

        <CategoryNavDisplay>
          <CategoryNav {...this.props} />
        </CategoryNavDisplay>

        <ParticlesStyles>
          <Particles
            style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            params={{
              particles: {
                number: {
                  value: 50,
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
                  opacity: 0.15,
                  width: 1
                },
                opacity: {
                  value: 0.1
                },
                move: {
                  speed: 1
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
