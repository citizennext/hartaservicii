const write = require('write');
const path = require(`path`);
// @ts-ignore
const { introspectionQuery, graphql, printSchema } = require('gatsby/graphql');

/**
 * Generate GraphQL schema.json file to be read by tslint
 * Thanks: https://gist.github.com/kkemple/6169e8dc16369b7c01ad7408fc7917a9
 */
exports.onPostBootstrap = async ({ store }) => {
  try {
    const { schema } = store.getState();
    const jsonSchema = await graphql(schema, introspectionQuery);
    const sdlSchema = printSchema(schema);

    write.sync('schema.json', JSON.stringify(jsonSchema.data), {});
    write.sync('schema.graphql', sdlSchema, {});

    console.log('\n\n[gatsby-plugin-extract-schema] Wrote schema\n'); // eslint-disable-line
  } catch (error) {
    console.error('\n\n[gatsby-plugin-extract-schema] Failed to write schema: ', error, '\n');
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
  const pageTemplate = path.resolve(`src/templates/page.tsx`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadContentQuery($limit: Int!) {
        hasura {
          blogs(last: $limit) {
            slug
          }
          pages(last: $limit) {
            slug
          }
        }
      }
    `,
    { limit: 100 }
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.hasura.blogs.forEach(blog => {
      createPage({
        // Path for this page — required
        path: `${blog.slug}`,
        component: blogPostTemplate,
        context: {
          slug: blog.slug,
        },
      });
    });
    // Create  pages.
    result.data.hasura.pages.forEach(page => {
      createPage({
        // Path for this page — required
        path: `${page.slug}`,
        component: pageTemplate,
        context: {
          slug: page.slug,
        },
      });
    });
  });
};
