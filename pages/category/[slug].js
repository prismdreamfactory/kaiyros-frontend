import React, { useState } from 'react';
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
import CategoryTitle from '../../microcomponents/CategoryTitle';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const CategoryContainer = styled.div`
  max-width: 1100px;
  margin: auto;

  a {
    font-size: 1.3rem;
    text-decoration: none;
  }

  .post-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  @media (max-width: 1024px) {
    /* margin-top: 4rem; */
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
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);

    document.querySelector('body').style.overflow = 'hidden';
  };

  const closeModal = () => {
    setOpen(false);

    document.querySelector('body').style.overflow = '';
  };

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
        <CategoryTitle
          title={category[0].name}
          subtitle={category[0].description}
          image={category[0].acf.image.sizes.medium}
          openModal={openModal}
        />

        <LearnMore {...props} isOpen={isOpen} closeModal={closeModal} />

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
