import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';

const PageTemplate = ({ data }) => (
  <Layout
    pageId={data.wordpressPage.wordpress_id}
    pageSlug={data.wordpressPage.slug}
  >
    <Hero title={data.wordpressPage.title} />
    <div
      className="system-output container"
      dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
    />
  </Layout>
);

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      excerpt
      wordpress_id
      slug
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`;
