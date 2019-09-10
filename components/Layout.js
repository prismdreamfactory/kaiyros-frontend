import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

const LayoutStyle = styled.div`
  font-family: courier, sans-serif;
  margin: 0 2rem;

  p {
    line-height: 1.6;
  }

  a:hover {
    color: #2b9985;
  }
`;

const Layout = props => {
  const { children } = props;

  return (
    <LayoutStyle>
      <Header />
      <Nav {...props} />
      {children}
      <Footer {...props} />
    </LayoutStyle>
  );
};
export default Layout;
