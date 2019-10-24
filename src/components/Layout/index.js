/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

// Theme for Entire App
import theme from './Styles/Theme';
// Global Styles for entire App
import GlobalStyle from './Styles/GlobalStyles';

// Required Components
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children, home, pageId, pageSlug }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <main
            className={
              pageSlug && pageId
                ? `page-slug-${pageSlug} page-id-${pageId}`
                : `no-id`
            }
          >
            {children}
          </main>
          <Footer />
        </>
      )}
    />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
