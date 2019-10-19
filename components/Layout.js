import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Favicon from 'react-favicon';

const LayoutStyle = styled.div`
  font-family: 'Josefin Slab', serif;
  margin: 0 2rem;
  letter-spacing: 0.02rem;

  h1 {
    font-size: 2.3rem;
  }

  p,
  ol,
  ul {
    line-height: 3rem;
    font-size: 1.3rem;
  }

  a {
    transition: 0.4s ease;

    &:hover {
      color: #2b9985;
    }
  }

  input::placeholder {
    font-family: 'Josefin Slab', serif;
  }
`;

const Layout = props => {
  const { children } = props;

  return (
    <LayoutStyle>
      <Favicon url="../static/favicon.ico" />
      <Header />
      <Nav {...props} />
      {children}
      <Footer {...props} />
    </LayoutStyle>
  );
};
export default Layout;
