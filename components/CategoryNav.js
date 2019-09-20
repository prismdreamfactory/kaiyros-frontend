import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export const CategoryNav = props => {
  const CategoryNavStyles = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 812px) and (orientation: landscape) {
      flex-direction: row;
      flex-wrap: wrap;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: #000;
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;

      @media (max-width: 812px) and (orientation: landscape) {
        width: 25%;
      }
    }

    img {
      width: 13%;
      padding: 0;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    .category-title {
      margin-left: 1rem;
    }
    .category-subtitle {
      margin-left: 1rem;
      font-size: 0.75rem;
    }
  `;

  const renderCategoryLinks = category => {
    const [subtitle, setSubtitle] = useState(false);

    if (props.displaySubtitle === true) {
      useEffect(() => {
        setSubtitle(true);
      });
    }

    return (
      <Link href={`/category/${category.slug}`} key={category.id}>
        <a>
          <img src={category.acf.image.sizes.thumbnail} alt="placeholder" />
          <div>
            <span className="category-title">{category.name}</span>
            {subtitle === true && (
              <span className="category-subtitle">{category.description}</span>
            )}
          </div>
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
