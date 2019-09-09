import styled from 'styled-components';
import Link from 'next/link';
import { DatePost } from '../microcomponents/DatePost';
import { ShareButtons } from '../microcomponents/ShareButtons';

const CategoryFeatureStyles = styled.div`
  display: flex;
  max-width: 2000px;
  margin: 1.5rem auto;
  justify-content: space-evenly;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.5rem;
    max-width: 540px;
  }

  .title {
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  @media (min-width: 0px) and (max-width: 1024px) {
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

    console.log(stickyImage);

    const stickyMedia =
      post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
        .source_url;

    return (
      <CategoryFeatureStyles key={post.id}>
        <a href={`/post?slug=${post.slug}&apiRoute=post`}>
          <img src={stickyImage} alt="" />
        </a>
        <div className="content">
          <div>
            <Link
              as={`/post/${post.slug}`}
              href={`/post?slug=${post.slug}&apiRoute=post`}
            >
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
