import React from 'react';
import styled from 'styled-components';

export const CategoryTitle = props => {
  return (
    <StyledCategoryTitle>
      <div className="container">
        <img className="category__image" src={props.image} alt="placeholder" />

        <div className="category__text">
          <a className="category__title" onClick={props.openModal}>
            <span
              dangerouslySetInnerHTML={{
                __html: props.title
              }}
            />
          </a>

          <span
            className="category__subtitle"
            dangerouslySetInnerHTML={{
              __html: props.subtitle
            }}
          />
        </div>
      </div>
    </StyledCategoryTitle>
  );
};

const StyledCategoryTitle = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    padding: 0.75rem 2rem;
    margin: 2rem 0;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    max-width: 50px;

    @media (max-width: 768px) {
      max-width: 50px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }

  .category__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
  }

  .category__title {
    cursor: pointer;
    font-size: 1.5rem;
    text-align: center;
    color: #000;
    border-bottom: 0.2px solid #000;
    /* text-decoration: underline; */
    margin-bottom: 0.2rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .category__subtitle {
    font-size: 0.8rem;
  }
`;

export default CategoryTitle;
