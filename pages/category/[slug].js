import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Error from 'next/error';
import WPAPI from 'wpapi';
import Config from '../../config';
import Layout from '../../components/Layout';
import PageWrapper from '../../components/PageWrapper';
import CategoryFeature from '../../components/CategoryFeature';
import CategoryPosts from '../../components/CategoryPosts';
import LearnMore from '../../components/LearnMore';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const CategoryContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  a {
    font-size: 1.3rem;
    text-decoration: none;
    color: #000;
  }
  .categoryContainer {
    flex-direction: column;
    margin-left: 1rem;
  }

  .categoryTitle {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    img {
      width: 100%;
      max-width: 100px;
      /* box-shadow: 0 0 5px 6px #fff, 0 0 5px 10px #2b9985, 0 0 8px 13px #4b0082;
      border-radius: 50%; */

      @media (max-width: 768px) {
        max-width: 50px;
      }
    }
  }

  .category {
    text-transform: capitalize;
  }
  .categoryHead {
    font-size: 1.7rem;
    margin: 0.5rem 0;
    text-align: center;
  }
  .postLayout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  @media (max-width: 1024px) {
    margin-top: 5rem;
    .postLayout {
      grid-template-columns: 1fr;
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
      transform: rotate3d(0deg);
    }
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
`;

const Category = props => {
  const { category, posts, pages } = props;

  if (category.length === 0) return <Error statusCode={404} />;

  // // make array of sticky posts
  const stickyPosts = posts.filter(stickyPost => stickyPost.sticky === true);

  // // make array of non-sticky posts
  const regPosts = posts.filter(regPost => regPost.sticky !== true);

  return (
    <Layout {...props}>
      <Head>
        <title>{category[0].name}</title>
        <meta name="description" content={category[0].description} />
      </Head>

      <h1>{props.slug}</h1>
      <CategoryContainer {...props}>
        <div className="categoryTitle">
          <img
            // className="rotate"
            src={category[0].acf.image.sizes.medium}
            alt="placeholder"
          />
          <div className="categoryContainer">
            <div className="category">
              <h1 className="categoryHead">{category[0].name}</h1>
            </div>
            <LearnMore {...props} />
          </div>
        </div>
        <div>
          <CategoryFeature posts={stickyPosts} />

          <div className="postLayout">
            <CategoryPosts posts={regPosts} />
          </div>
        </div>
      </CategoryContainer>
    </Layout>
  );
};

Category.getInitialProps = async ({ query }) => {
  const { slug } = query;

  const category = await wp
    .categories()
    .slug(slug)
    .embed();

  if (category.length > 0) {
    const posts = await wp
      .posts()
      .category(category[0].id)
      .embed();
    return { category, posts };
  }

  return { slug };
};

export default PageWrapper(Category);
