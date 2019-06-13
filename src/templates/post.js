import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
//import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const PostTemplate = ({ data }) => (
  <Layout>
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
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
