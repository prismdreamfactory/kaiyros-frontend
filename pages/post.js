import React, { Component } from 'react';
import styled from 'styled-components';
import Error from 'next/error';
import WPAPI from 'wpapi';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Menu from '../components/Menu';
import Config from '../config';
import { DatePost } from '../microcomponents/DatePost';
import { ShareButtons } from '../microcomponents/ShareButtons';

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

class Post extends Component {
  static async getInitialProps(context) {
    const { slug, apiRoute } = context.query;

    let apiMethod = wp.posts();

    switch (apiRoute) {
      case 'category':
        apiMethod = wp.categories();
        break;
      case 'page':
        apiMethod = wp.pages();
        break;
      default:
        break;
    }

    const post = await apiMethod
      .slug(slug)
      .embed()
      .then(data => {
        return data[0];
      });

    return { post };
  }

  render() {
    const { post, headerMenu } = this.props;
    if (!post.title) return <Error statusCode={404} />;

    return (
      <Layout {...this.props}>
        <Menu menu={headerMenu} />
        <PostStyle>
          <img
            src={
              post._embedded['wp:featuredmedia'][0].media_details.sizes.large
                .source_url
            }
            alt=""
          />

          <h1>{post.title.rendered}</h1>

          <div className="sub">
            <DatePost datesrc={post.date} />
            <ShareButtons
              url={post.link}
              media={
                post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
                  .source_url
              }
            />
          </div>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: post.content.rendered
            }}
          />
        </PostStyle>
      </Layout>
    );
  }
}

export default PageWrapper(Post);
