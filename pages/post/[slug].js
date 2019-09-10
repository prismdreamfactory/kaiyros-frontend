import React, { Component } from 'react';
import styled from 'styled-components';
import Error from 'next/error';
import WPAPI from 'wpapi';
import Config from '../../config';
import Layout from '../../components/Layout';
import PageWrapper from '../../components/PageWrapper';
import { DatePost } from '../../microcomponents/DatePost';
import { ShareButtons } from '../../microcomponents/ShareButtons';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const PostStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;

  a {
    color: #2b9985;
    text-decoration: none;
  }

  margin: auto;
  img {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    max-height: 500px;
  }
  .sub {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Post = props => {
  const { post } = props;

  if (!post.title) return <Error statusCode={404} />;

  const featuredImage =
    post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;

  const shareImage =
    post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;

  return (
    <Layout {...props}>
      <PostStyle>
        <img src={featuredImage} alt="" />

        <h1>{post.title.rendered}</h1>

        <div className="sub">
          <DatePost datesrc={post.date} />
          <ShareButtons url={post.link} media={shareImage} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />
      </PostStyle>
    </Layout>
  );
};

Post.getInitialProps = async ({ query }) => {
  const { slug } = query;

  const post = await wp
    .posts()
    .slug(slug)
    .embed()
    .then(data => {
      return data[0];
    });

  return { post };
};

export default PageWrapper(Post);
