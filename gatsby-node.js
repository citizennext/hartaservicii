// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
const path = require(`path`);
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const popUpTemplate = path.resolve(`src/components/Map/PopUps.tsx`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadContentQuery($limit: Int!) {
        hasura {
          providers(limit: $limit) {
            name
          }
        }
      }
    `,
    { limit: 3 }
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create  pages.
    result.data.hasura.providers.forEach(provider => {
      createPage({
        // Path for this page — required
        path: `serviciu/${provider.name}`,
        component: popUpTemplate,
        context: {
          slug: provider.name,
        },
      });
    });
  });
};


// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
//   const pageTemplate = path.resolve(`src/templates/page.tsx`);
//   // Query for markdown nodes to use in creating pages.
//   // You can query for whatever data you want to create pages for e.g.
//   // products, portfolio items, landing pages, etc.
//   // Variables can be added as the second function parameter
//   return graphql(
//     `
//       query loadContentQuery($limit: Int!) {
//         hasura {
//           blogs(last: $limit) {
//             slug
//             title
//           }
//           pages(last: $limit) {
//             slug
//           }
//         }
//       }
//     `,
//     { limit: 100 }
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors;
//     }

//     // Create blog post pages.
//     result.data.hasura.blogs.forEach((blog, index) => {
//       const previous = index === result.data.hasura.blogs.length - 1 ? null : result.data.hasura.blogs[index + 1];
//       const next = index === 0 ? null : result.data.hasura.blogs[index - 1];

//       createPage({
//         // Path for this page — required
//         path: `/noutati/${blog.slug}`,
//         component: blogPostTemplate,
//         context: {
//           slug: blog.slug,
//           previous,
//           next,
//         },
//       });
//     });

//     // Create  pages.
//     result.data.hasura.pages.forEach(page => {
//       createPage({
//         // Path for this page — required
//         path: `${page.slug}`,
//         component: pageTemplate,
//         context: {
//           slug: page.slug,
//         },
//       });
//     });
//   });
// };

// download images from hasura
// exports.createResolvers = ({ actions, cache, createNodeId, createResolvers, store, reporter }) => {
//   const { createNode } = actions;
//   const imageUrlFieldName = 'url'; //graphCMS stores images there
//   const schemaName = process.env.GATSBY_HASURA_GRAPHQL_TYPE_NAME;

//   const state = store.getState();
//   const schema = state.schemaCustomization.thirdPartySchemas.filter(s => s._typeMap[schemaName])[0];

//   if (!schema) {
//     throw new Error(`SCHEMA '${schemaName} NOT FOUND'`);
//   } else {
//     console.log(`Found schema '${schemaName}', traversing for image fields with name '${imageUrlFieldName}'`);
//   }

//   const typeMap = schema._typeMap;
//   const resolvers = {};

//   for (const typeName in typeMap) {
//     const typeEntry = typeMap[typeName];
//     const typeFields = (typeEntry && typeEntry.getFields && typeEntry.getFields()) || {};
//     const typeResolver = {};
//     for (const fieldName in typeFields) {
//       const field = typeFields[fieldName];

//       if (fieldName === imageUrlFieldName && typeFields.mimeType) {
//         const x = Object.keys(typeFields);
//         typeResolver[`${fieldName}Sharp`] = {
//           type: 'File',
//           resolve(source) {
//             const url = source[imageUrlFieldName];
//             if (url) {
//               return createRemoteFileNode({
//                 url,
//                 store,
//                 cache,
//                 createNode,
//                 createNodeId,
//                 reporter,
//               });
//             }
//             return null;
//           },
//         };
//       }
//     }
//     if (Object.keys(typeResolver).length) {
//       resolvers[typeName] = typeResolver;
//     }
//   }

//   if (Object.keys(resolvers).length) {
//     createResolvers(resolvers);
//   }
// };
