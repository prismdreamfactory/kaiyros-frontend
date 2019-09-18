import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { FaSearch } from 'react-icons/fa';

const SearchInputStyles = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.25rem;

  svg {
    margin-top: 6px;
    width: 18px;
    height: 18px;
  }

  a {
    cursor: pointer;
  }

  form {
    margin-right: 1rem;
  }
`;

const SearchInput = () => {
  const [input, handleInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    Router.push({
      pathname: '/search',
      query: { q: input }
    });
  };

  return (
    <SearchInputStyles>
      <form onSubmit={handleSubmit}>
        <TextField
          type="search"
          placeholder="Search"
          value={input}
          onChange={e => handleInput(e.target.value)}
        />
      </form>
      <a>
        <FaSearch />
      </a>
    </SearchInputStyles>
  );
};

export default SearchInput;
