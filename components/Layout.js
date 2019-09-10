import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

const LayoutStyle = styled.div`
  font-family: Helvetica, sans-serif;

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
      <Footer />
    </LayoutStyle>
  );
};
export default Layout;
