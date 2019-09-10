import styled from 'styled-components';
import Link from 'next/link';
import { DatePost } from '../microcomponents/DatePost';
import { ShareButtons } from '../microcomponents/ShareButtons';

const CategoryPostsStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    object-fit: cover;
  }

  .title {
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

const CategoryPosts = props => {
  const { posts } = props;

  const categoryPosts = posts.map(post => {
    const featuredImage =
      post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large
        .source_url;

    const featuredMedia =
      post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
        .source_url;

    return (
      <CategoryPostsStyles key={post.id}>
        <div className="postContent">
          <div className="center">
            <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
              <a>
                <img width="450" height="280" src={featuredImage} alt="" />
              </a>
            </Link>
          </div>
          <div>
            <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
              <a className="title">{post.title.rendered}</a>
            </Link>
            <DatePost datesrc={post.date} />
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered
              }}
            />
          </div>
        </div>
        <ShareButtons url={post.link} media={featuredMedia} />
      </CategoryPostsStyles>
    );
  });

  return categoryPosts;
};

export default CategoryPosts;
