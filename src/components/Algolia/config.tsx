/*
 * @author Stefan Iurasog <si@codesicle.com>
 */

import algoliasearch from 'algoliasearch';

const indexProviders: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_PROVIDERS}`;
const indexPages: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_PAGES}`;
const indexBlog: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_BLOG}`;

const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_API_KEY}`);
const providers = client.initIndex(indexProviders);
const pages = client.initIndex(indexPages);
const blog = client.initIndex(indexBlog);

providers
  .setSettings({
    searchableAttributes: ['name', 'location', 'district', 'address', 'supplier.name', 'service.name'],
    customRanking: ['asc(name)'],
    attributesForFaceting: ['name', 'location', 'district', 'service.name'],
  })
  .then(() => {
    // console.log('--- then why ---');
  });

pages
  .setSettings({
    searchableAttributes: ['title', 'summary'],
    customRanking: ['asc(name)'],
  })
  .then(() => {
    // console.log('--- then why ---');
  });

blog
  .setSettings({
    searchableAttributes: ['title', 'summary'],
    customRanking: ['asc(name)'],
  })
  .then(() => {
    // console.log('--- then why ---');
  });
