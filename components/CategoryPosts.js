import styled from 'styled-components';
import Link from 'next/link';
import { DatePost } from '../microcomponents/DatePost';
import { ShareButtons } from '../microcomponents/ShareButtons';

const CategoryPostsStyles = styled.div`
  max-width: 625px;
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
            <a href={`/post?slug=${post.slug}&apiRoute=post`}>
              <img width="450" height="280" src={featuredImage} alt="" />
            </a>
          </div>
          <div>
            <Link
              as={`/post/${post.slug}`}
              href={`/post?slug=${post.slug}&apiRoute=post`}
            >
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
