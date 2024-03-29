require('dotenv').config();
const siteConfig = require('./site-config');
const queries = require('./src/utils/algolia.js');
const tailwindConfig = require('./tailwind.config.js');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '226417208680464',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KNQ9RQZ',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400,400i,700,700i`,
          `Koho\:200i,400,400i,700,700i`,
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
        crossOrigin: `anonymous`,
        rel: `preload`,
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
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    //   // options: {},
    // },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [
          require('tailwindcss'),
          tailwindConfig,
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
        ],
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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME_COMMON, // for all queries
        queries,
        chunkSize: 10000,
        settings: {
          // optional, any index settings
        },
        enablePartialUpdates: true,
        matchFields: ['updatedAt'],
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://f2r31ssu7s-dsn.algolia.net'],
      },
    },
    {
      resolve: `gatsby-plugin-minify`,
      options: {
        removeAttributeQuotes: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
      },
    },
  ],
};
