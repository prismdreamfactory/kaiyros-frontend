import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Error from 'next/error';
import WPAPI from 'wpapi';
import Config from '../../config';
import Layout from '../../components/Layout';
import PageWrapper from '../../components/PageWrapper';
import { DatePost } from '../../microcomponents/DatePost';
import { ShareButtons } from '../../microcomponents/ShareButtons';
import Disqus from 'disqus-react';
import AuthorLabel from '../../microcomponents/AuthorLabel';
import ImageCredit from '../../microcomponents/ImageCredit';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const PostStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;

  a {
    color: #2b9985;
    text-decoration: none;
  }
  h1 {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  img {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    max-height: 500px;
    margin-top: 2rem;
  }
  .sub {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 10px 0;
  }
  .share {
    display: flex;
    justify-content: flex-end;
  }
  .disqus {
    margin: 2rem 0;
  }

  .post-meta {
  }

  ul,
  ol {
    margin: 1rem 0;
  }

  li {
    margin-bottom: 1rem;
  }

  article {
    margin: 2rem 0;
  }

  .share-bottom {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
`;

const Post = props => {
  const { post } = props;

  const [postUrl, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  });

  const disqusShortname = 'kaiyros-publications';
  const disqusConfig = {
    url: postUrl,
    identifier: post.id,
    title: post.title.rendered
  };

  if (!post.title) return <Error statusCode={404} />;

  const featuredImage = post._embedded['wp:featuredmedia'][0].source_url;

  const shareImage =
    post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;

  const postExcerpt = post.excerpt.rendered.replace(/(<([^>]+)>)/gi, '');

  return (
    <Layout {...props}>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={postExcerpt} />
      </Head>

      <PostStyle>
        <img src={featuredImage} alt="" />
        <ImageCredit post={post} />

        <h1>{post.title.rendered}</h1>

        <div className="sub">
          <div className="post-meta">
            <AuthorLabel {...props} />
            <DatePost datesrc={post.date} />
          </div>

          <ShareButtons url={post.link} media={shareImage} />
        </div>
        <article
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />

        <div className="share-bottom">
          <ShareButtons url={post.link} media={shareImage} />
        </div>

        <div className="disqus">
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
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
