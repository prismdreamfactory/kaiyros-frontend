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
  }
  .category-container {
    flex-direction: column;
    margin-left: 1rem;
  }

  .category-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .category-title-wrapper {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .category-title {
    padding: 0.75rem 2rem;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 50px;
      /* box-shadow: 0 0 5px 6px #fff, 0 0 5px 10px #2b9985, 0 0 8px 13px #4b0082;
      border-radius: 50%; */

      @media (max-width: 768px) {
        max-width: 50px;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem 0;
    }
  }

  .category {
    text-transform: capitalize;
  }
  .category-head {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    text-align: center;
  }
  .post-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  @media (max-width: 1024px) {
    margin-top: 6rem;
    .post-layout {
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

      <CategoryContainer {...props}>
        <div className="category-title-wrapper">
          <div className="category-title">
            <img
              // className="rotate"
              src={category[0].acf.image.sizes.medium}
              alt="placeholder"
            />

            <div className="category-container">
              <div className="category">
                <h1
                  className="category-head"
                  dangerouslySetInnerHTML={{
                    __html: category[0].name
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <CategoryFeature posts={stickyPosts} />
          <div className="post-layout">
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
