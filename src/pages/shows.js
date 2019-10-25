import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Card from '../components/Card';

const ShowPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query showQuery {
          allWordpressWpShow {
            edges {
              node {
                title
                content
                template
                wordpress_id
                slug
                excerpt
                type
                featured_media {
                  localFile {
                    childImageSharp {
                      fluid(fit: COVER) {
                        src
                        srcSet
                        srcSetWebp
                      }
                    }
                  }
                  alt_text
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <SEO title="Shows" />
          <Hero title="Shows" />
          <div>
            <div className="row row-no-gap under-slant">
              {data.allWordpressWpShow.edges.map(({ node }) => (
                <div key={node.slug} className="col-md-4 col-xs-12 text-center">
                  <Card node={node} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    />
  </Layout>
);

export default ShowPage;
