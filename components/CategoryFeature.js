import styled from 'styled-components';
import Link from 'next/link';
import { DatePost } from '../microcomponents/DatePost';
import { ShareButtons } from '../microcomponents/ShareButtons';

const CategoryFeatureStyles = styled.div`
  max-width: 1100px;
  margin: 1.5rem auto;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 1rem 0;
    display: block;
  }

  img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    img {
      width: 100%;
    }
    .content {
      padding: 0;
    }
  }
`;

const CategoryFeature = props => {
  const { posts } = props;

  const featuredPosts = posts.map(post => {
    const stickyImage =
      post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large
        .source_url;

    const stickyMedia =
      post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
        .source_url;

    return (
      <CategoryFeatureStyles key={post.id}>
        <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
          <a>
            <img src={stickyImage} alt="" />
          </a>
        </Link>
        <div className="content">
          <div>
            <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
              <a className="title">{post.title.rendered}</a>
            </Link>
          </div>
          <DatePost datesrc={post.date} />
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered
            }}
          />
          <ShareButtons url={post.link} media={stickyMedia} />
        </div>
      </CategoryFeatureStyles>
    );
  });

  return featuredPosts;
};

export default CategoryFeature;
