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

  button {
    margin-left: 1rem;
    cursor: pointer;
    border: none;
    background-color: transparent;

    &:hover {
      opacity: 0.8;
    }
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
          placeholder="Search"
          value={input}
          onChange={e => handleInput(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </SearchInputStyles>
  );
};

export default SearchInput;
