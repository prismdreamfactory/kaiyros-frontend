import React from 'react';
import Head from 'next/head';

import { GA_TRACKING_ID } from '../utils/gtag';

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

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
        }}
      />
    </Head>
  </div>
);

export default Header;
