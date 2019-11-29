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

      @media (max-height: 700px) {
        margin-bottom: 1rem;
      }
    }

    img {
      width: 13%;
      padding: 0;

      @media (max-height: 700px) {
        width: 11%;
      }
    }

    div {
      display: flex;
      flex-direction: column;
    }

    .category-title {
      margin-left: 1rem;
      font-size: 1.4rem;
      text-decoration: underline;
      /* font-weight: 700; */
      margin-bottom: 0.2rem;

      @media (max-width: 1024px) {
        font-size: 1.2rem;
      }

      @media (max-height: 700px) {
        font-size: 1rem;
      }
    }
    .category-subtitle {
      margin-left: 1rem;
      font-size: 1rem;

      @media (max-width: 1024px) {
        font-size: 0.7rem;
      }

      @media (max-height: 700px) {
        font-size: 0.7rem;
      }
    }

    .rotate {
      animation-name: spin;
      animation-duration: 30s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
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
          <img
            className={category.id === 1 ? '' : 'rotate'}
            src={category.acf.image.sizes.thumbnail}
            alt="placeholder"
          />
          <div>
            <span
              className="category-title"
              dangerouslySetInnerHTML={{
                __html: category.name
              }}
            />
            {subtitle === true && <span className="category-subtitle">{category.description}</span>}
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
