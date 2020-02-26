require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `KoHo`,
            subsets: [`latin-ext`],
            variants: [`400`, `400i`, `700`, `700i`],
          },
          {
            family: `Montserrat`,
            subsets: [`latin-ext`],
            variants: [`400`, `400i`, `700`, `700i`],
          },
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https:/hartasociala.ro',
    //     sitemap: 'https:/hartasociala.ro/sitemap.xml',
    //     policy: [{ userAgent: '*', allow: '/' }]
    //   }
    // },
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
        icon: `src/assets/images/harta-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cache`,
      options: {
        // this may cause builds to fail in the long run
        cachePublic: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [require('tailwindcss'), require('./tailwind.config.js')],
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true,
        preferCanvas: true,
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: process.env.GATSBY_HASURA_GRAPHQL_TYPE_NAME,
        fieldName: process.env.GATSBY_HASURA_GRAPHQL_FIELD_NAME,
        url: process.env.GATSBY_HASURA_GRAPHQL_URL,
        refetchInterval: 6000,
        headers: {
          'content-type': `application/json`,
        },
      },
    },
  ],
};
