require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const common = `query {
  hasura {
    pages {
      slug
      title
      summary
      content {
        text
      }
    }
    blogs {
      slug
      title
      summary
      content {
        text
      }
    }
    providers {
      id
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
  data.map(a => {
    return { ...a, type };
  });
const prepareData = data => [
  ...addType(data.blogs, 'Noutăți'),
  ...addType(data.pages, 'Pagini'),
  ...addType(data.providers, 'Servicii'),
  ...addType(data.providers, '*'),
];

const queries = [
  {
    query: common,
    transformer: ({ data }) => prepareData(data.hasura),
    indexName: process.env.ALGOLIA_INDEX_NAME_COMMON,
  },
];
module.exports = queries;
