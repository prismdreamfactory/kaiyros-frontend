import React, { Component } from 'react';
import styled from 'styled-components';
import Error from 'next/error';
import WPAPI from 'wpapi';
import Config from '../config';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import CategoryPosts from '../components/CategoryPosts';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const SearchContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  a {
    font-size: 1.3rem;
    text-decoration: none;
    color: #000;
  }
  h1 {
    display: flex;
    justify-content: center;
  }
  .query {
    color: #2b9885;
    text-decoration: underline;
    padding-left: 1rem;
  }
  .postLayout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  .searchHead {
    text-align: center;
  }
`;

const Search = props => {
  const { search } = props;
  return (
    <Layout {...props}>
      <SearchContainer>
        <h1 className="searchHead">
          Search results for
          <span className="query">{props.q}</span>
        </h1>

        <div className="postLayout">
          <CategoryPosts posts={search} />
        </div>
      </SearchContainer>
    </Layout>
  );
};

Search.getInitialProps = async ({ query }) => {
  const { q } = query;

  const search = await wp
    .posts()
    .search(q)
    .embed();

  return { search, q };
};

export default PageWrapper(Search);
