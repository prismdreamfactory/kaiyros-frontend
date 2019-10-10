import React from 'react';
import Head from 'next/head';

const Header = () => (
  <div>
    <Head>
      {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Slab&display=swap"
        rel="stylesheet"
      ></link>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Kaiyros</title>
    </Head>
  </div>
);

export default Header;
