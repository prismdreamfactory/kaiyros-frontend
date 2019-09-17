import React from 'react';
import styled from 'styled-components';
import Error from 'next/error';
import WPAPI from 'wpapi';
import Config from '../config';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const PageStyle = styled.div`
  a {
    display: flex;
    justify-content: center;
  }
  h1 {
    display: flex;
    justify-content: center;
  }

  div {
    max-width: 800px;
    margin: auto;
    padding: 1rem 0;
  }
`;

const Page = props => {
  const { page } = props;

  const pageTitle = page[0].title.rendered;
  const pageContent = page[0].content.rendered;

  if (!pageTitle) return <Error statusCode={404} />;

  return (
    <Layout {...props}>
      <PageStyle>
        <h1>{pageTitle}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: pageContent
          }}
        />
      </PageStyle>
    </Layout>
  );
};

Page.getInitialProps = async ({ query }) => {
  const { pageSlug } = query;

  const page = await wp
    .pages()
    .slug(pageSlug)
    .embed();

  return { page };
};

export default PageWrapper(Page);
