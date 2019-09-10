import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Error from 'next/error';
import WPAPI from 'wpapi';
import Config from '../../config';
import Layout from '../../components/Layout';
import PageWrapper from '../../components/PageWrapper';
import CategoryFeature from '../../components/CategoryFeature';
import CategoryPosts from '../../components/CategoryPosts';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const CategoryContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  a {
    font-size: 1.3rem;
    text-decoration: none;
    color: #000;
  }
  .categoryTitle {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 100px;
    }
  }

  .categoryHead {
    margin-left: 2rem;
    text-align: center;
  }
  .postLayout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto auto;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    margin-top: 5rem;
    .postLayout {
      grid-template-columns: 1fr;
    }
  }
`;

const Category = props => {
  const { category, posts } = props;

  if (category.length === 0) return <Error statusCode={404} />;

  // // make array of sticky posts
  const stickyPosts = posts.filter(stickyPost => stickyPost.sticky === true);

  // // make array of non-sticky posts
  const regPosts = posts.filter(regPost => regPost.sticky !== true);

  return (
    <Layout {...props}>
      <h1>{props.slug}</h1>
      <CategoryContainer>
        <div className="categoryTitle">
          <div className="center">
            <img src={category[0].acf.image.sizes.medium} alt="placeholder" />
          </div>
          <h1 className="categoryHead">{category[0].name}</h1>
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
