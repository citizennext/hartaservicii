require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const common = `query {
  hasura {
    pages (where: { status: PUBLISHED }) {
      objectID: id
      slug
      title
      summary
      content {
        text
      }
      updatedAt
    }
    blogs (where: { status: PUBLISHED }) {
      objectID: id
      slug
      title
      summary
      content {
        text
      }
      updatedAt
    }
    providers {
      objectID: id
      name
      location
      district
      supplier {
        name
      }
    }
  }
}`;

const addType = (data, type) =>
  data.map((a) => {
    return { ...a, type };
  });
const prepareData = (data) => [
  ...addType(data.blogs, 'Noutăți'),
  ...addType(data.pages, 'Pagini'),
  ...addType(data.providers, 'Servicii'),
];

const queries = [
  {
    query: common,
    transformer: ({ data }) => prepareData(data.hasura),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME_COMMON,
  },
];
module.exports = queries;
