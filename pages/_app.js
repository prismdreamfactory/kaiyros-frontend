import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import * as gtag from '../utils/gtag';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    );
  }
}
