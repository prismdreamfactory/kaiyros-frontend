import Link from 'next/link';
import styled from 'styled-components';

export const CategoryNav = props => {
  const CategoryNavStyles = styled.div`
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      cursor: pointer;
      color: #000;
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    img {
      width: 15%;
      padding: 0;
    }

    .category-title {
      margin-left: 1rem;
    }
  `;

  const renderCategoryLinks = category => {
    return (
      <Link href={`/category/${category.slug}`} key={category.id}>
        <a>
          <img src={category.acf.image.sizes.thumbnail} alt="placeholder" />
          <span className="category-title">{category.name}</span>
        </a>
      </Link>
    );
  };

  return (
    <CategoryNavStyles>
      {props.categories.map(category => renderCategoryLinks(category))}
    </CategoryNavStyles>
  );
};
