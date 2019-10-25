import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Favicon from 'react-favicon';

const LayoutStyle = styled.div`
  font-family: 'Lora', serif;
  margin: 0 2rem;
  letter-spacing: 0.02rem;

  main {
    min-height: calc(100vh - 200px);

    @media (max-width: 768px) {
      min-height: calc(100vh - 280px);
    }
  }

  h1 {
    font-size: 2.3rem;
  }

  h1,
  .title {
    font-family: 'Josefin Slab', serif;
    font-weight: 700;
  }

  p,
  ol,
  ul {
    line-height: 2rem;
    font-size: 1.1rem;
  }

  p {
    margin: 0 0 2.5em 0;
  }

  a {
    color: #2b9985;
    transition: 0.4s ease;

    &:hover {
      opacity: 0.8;
    }

    &.logo,
    &.title {
      color: #000;
    }
  }

  input::placeholder {
    /* font-family: 'Josefin Slab', serif; */
    font-family: 'Lora', serif;
  }
`;

const Layout = props => {
  const { children } = props;

  return (
    <LayoutStyle>
      <Favicon url="../static/favicon.ico" />
      <Header />
      <Nav {...props} />
      <main>{children}</main>
      <Footer {...props} />
    </LayoutStyle>
  );
};
export default Layout;
