import styled from 'styled-components';
import Link from 'next/link';
import { DatePost } from '../microcomponents/DatePost';
import { ShareButtons } from '../microcomponents/ShareButtons';
import AuthorLabel from '../microcomponents/AuthorLabel';

const CategoryFeatureStyles = styled.div`
  max-width: 1100px;
  margin: 1.5rem auto;

  .title {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 1rem 0;
    display: block;
    width: 80%;
  }

  img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 200px;
    }
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

const TitleInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryFeature = props => {
  const { posts } = props;

  const featuredPosts = posts.map(post => {
    const stickyImage =
      post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;

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
        <div>
          <TitleInfo>
            <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
              <a className="title">{post.title.rendered}</a>
            </Link>
            <DatePost datesrc={post.date} />
          </TitleInfo>
          <AuthorLabel {...props} />
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
