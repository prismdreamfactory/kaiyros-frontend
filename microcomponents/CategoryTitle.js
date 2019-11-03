import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const CategoryTitle = props => {
  return (
    <StyledCategoryTitle>
      <div className="container">
        <img className="category__image" src={props.image} alt="placeholder" />

        <div className="category__text">
          <a
            className="category__title"
            onClick={props.openModal}
            dangerouslySetInnerHTML={{
              __html: props.title
            }}
          />

          <div className="category__subtitle">
            <span
              className="category__subtitle-text"
              dangerouslySetInnerHTML={{
                __html: props.subtitle
              }}
            />
            <FaExternalLinkAlt
              onClick={props.openModal}
              style={{ cursor: 'pointer' }}
            />
          </div>
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
    min-width: 550px;

    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
      padding: 0.75rem 0;
      min-width: 0;
    }
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
    font-size: 1.75rem;
    color: #000;
    /* border-bottom: 0.2px solid #000; */
    text-decoration: underline;
    margin-bottom: 0.2rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  .category__subtitle {
    display: flex;
    align-items: center;
  }

  .category__subtitle-text {
    font-size: 1rem;
    margin-right: 0.4rem;
  }
`;

export default CategoryTitle;
