import styled from 'styled-components';
import Link from 'next/link';
import { DatePost } from '../microcomponents/DatePost';
import { ShareButtons } from '../microcomponents/ShareButtons';
import AuthorLabel from '../microcomponents/AuthorLabel';
import Excerpt from '../microcomponents/Excerpt';

const CategoryPostsStyles = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  img {
    width: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 200px;
    }
  }

  .title {
    font-size: 1.5rem;
    margin: 1rem 0;
    display: block;
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

  .post-content {
    /* margin: 20px 0; */
  }
`;

const TitleInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CategoryPosts = props => {
  const { posts } = props;

  const categoryPosts = posts.map(post => {
    const featuredImage =
      post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
        .source_url;

    const featuredMedia =
      post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
        .source_url;

    return (
      <CategoryPostsStyles key={post.id}>
        <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
          <a>
            <img width="450" height="280" src={featuredImage} alt="" />
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
        </div>

        <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
          <a className="read-more">Continue reading...</a>
        </Link>
      </CategoryPostsStyles>
    );
  });

  return categoryPosts;
};

export default CategoryPosts;
