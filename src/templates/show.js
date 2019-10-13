import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';

const ShowTemplate = ({ data }) => (
  <Layout
    pageId={data.wordpressWpShow.wordpress_id}
    pageSlug={data.wordpressWpShow.slug}
  >
    <Hero title={data.wordpressWpShow.title} />
    <div
      className="system-output container"
      dangerouslySetInnerHTML={{ __html: data.wordpressWpShow.content }}
    />
  </Layout>
);

export default ShowTemplate;

export const showQuery = graphql`
  query($id: String!) {
    wordpressWpShow(id: { eq: $id }) {
      title
      content
      featured_img_url {
        source_url
      }
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
