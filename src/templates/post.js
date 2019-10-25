import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
//import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

// For tags with icons: https://github.com/gatsbyjs/gatsby/blob/master/examples/using-wordpress/src/components/post-icons.js

const PostTemplate = ({ data }) => (
  <Layout
    pageId={data.wordpressPost.wordpress_id}
    pageSlug={data.wordpressPost.slug}
  >
    <Hero title={data.wordpressPost.title} />
    <div
      className="system-output container"
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
  </Layout>
);

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
};

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      wordpress_id
      slug
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
