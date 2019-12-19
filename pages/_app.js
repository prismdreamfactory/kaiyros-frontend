import App from 'next/app';
import Router from 'next/router';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Provider as AlertProvider } from 'react-alert';
import { FiX } from 'react-icons/fi';

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

const alertStyle = {
  backgroundColor: '#e2e3e5',
  color: 'white',
  padding: '2rem',
  textTransform: 'uppercase',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
  fontFamily: 'Arial',
  width: '500px',
  boxSizing: 'border-box',
  fontFamily: `'Arial', sans`
};

const AlertTemplate = ({ style, options, message, close }) => (
  <div style={{ ...alertStyle, ...style }} onClick={close}>
    <span style={{ color: '#383d41' }}>{message}</span>
  </div>
);

// alert configuration options
const options = {
  position: 'bottom center',
  timeout: 3000,
  offset: '30px',
  transition: 'scale'
};

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AlertProvider template={AlertTemplate} {...options}>
          <div>
            <GlobalStyle />
            <Component {...pageProps} />
          </div>
        </AlertProvider>
      </ThemeProvider>
    );
  }
}
