import styled from 'styled-components';
import Link from 'next/link';
import { DatePost } from '../microcomponents/DatePost';
import { ShareButtons } from '../microcomponents/ShareButtons';
import AuthorLabel from '../microcomponents/AuthorLabel';
import ImageCredit from '../microcomponents/ImageCredit';
import Excerpt from '../microcomponents/Excerpt';

const CategoryFeatureStyles = styled.div`
  max-width: 1100px;
  margin: 1.5rem auto;

  .title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    display: block;
    width: 100%;
    text-align: center;

    @media (max-width: 1024px) {
      text-align: left;
    }
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

  p {
    /* margin: 0; */
  }

  .post-content {
    margin: 20px 0;
  }

  .post-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .read-more {
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
    font-size: 1.1rem;
    margin-top: auto;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    .title {
      width: 100%;
    }
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
  /* align-items: center; */
`;

const CategoryFeature = props => {
  const { posts } = props;

  const featuredPosts = posts.map(post => {
    const stickyImage =
      post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;

    const stickyMedia =
      post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
        .source_url;

    const excerpt = post.content.rendered;

    return (
      <CategoryFeatureStyles key={post.id}>
        <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
          <a>
            <img src={stickyImage} alt="" />
          </a>
        </Link>

        <div className="post-content">
          <TitleInfo>
            <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
              <a className="title">{post.title.rendered}</a>
            </Link>
          </TitleInfo>

          <div className="post-meta">
            <AuthorLabel post={post} />
            {/* <DatePost datesrc={post.date} /> */}
          </div>

          <Excerpt data={post.excerpt.rendered} />

          <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
            <a className="read-more">Continue reading...</a>
          </Link>
        </div>
      </CategoryFeatureStyles>
    );
  });

  return featuredPosts;
};

export default CategoryFeature;
