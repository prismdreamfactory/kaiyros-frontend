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
  .postLayout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  .searchHead {
    text-align: center;
  }
`;

const Search = props => {
  console.log(props);
  const { search } = props;
  return (
    <Layout {...props}>
      <SearchContainer>
        <h1 className="searchHead">Search Results for {props.q}</h1>

        <div className="postLayout">
          <CategoryPosts posts={search} />
        </div>
      </SearchContainer>
    </Layout>
  );
};

Search.getInitialProps = async ({ query }) => {
  const { q } = query;
  console.log('query', q);

  const search = await wp
    .posts()
    .search(q)
    .embed();

  return { search, q };
};

export default PageWrapper(Search);
