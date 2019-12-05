const siteConfig = require('./site-config')

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    'gatsby-theme-style-guide',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        // eslint-disable-next-line
        short_name: `Servicii`,
        // eslint-disable-next-line
        start_url: `/`,
        // eslint-disable-next-line
        background_color: `#663399`,
        // eslint-disable-next-line
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/harta-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cache`,
      options: {
        // this may cause builds to fail in the long run
        cachePublic: true,
      },
    },
  ],
}
