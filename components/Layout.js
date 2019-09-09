import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
// import { HeaderContent } from '../microcomponents/HeaderContent';

const LayoutStyle = styled.div`
  font-family: sans-serif;

  p {
    line-height: 1.6;
  }

  a:hover {
    color: #2b9985;
  }
`;

const Layout = props => {
  const { children } = props;

  console.log('layout', props);

  return (
    <LayoutStyle>
      <Header />
      {/* <HeaderContent {...props} /> */}
      {/* <CategoryMenu {...props} /> */}
      {children}
      <Footer />
    </LayoutStyle>
  );
};
export default Layout;
