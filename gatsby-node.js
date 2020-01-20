const path = require(`path`);

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
        path: `/noutati/${blog.slug}`,
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
