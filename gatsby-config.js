module.exports = {
  siteMetadata: {
    title: `Carl John Palmer`,
    description: `YouTube and Podcast host of shows like Cults Coffer & Conversation, The Great Inquisition, and many more.`,
    author: `@carljpalmer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/media/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/media/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      // WordPress Plugin
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `dev.htrdesign.net/cjp`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/show',
          '**/media',
          '**/tags',
          '**/taxonomies',
        ],
      },
    },
  ],
};
