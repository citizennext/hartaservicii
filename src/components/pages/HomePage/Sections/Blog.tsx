import React from 'react';
import BlogPost from '../../../BlogPost';

import { graphql, StaticQuery } from 'gatsby';
const query = graphql`
  query {
    hasura {
      blogs(last: 3, orderBy: publishedAt_DESC, where: { status: PUBLISHED }) {
        id
        publishedAt
        title
        summary
        slug
        image {
          url
          urlSharp {
            childImageSharp {
              fluid(maxHeight: 190, maxWidth: 410) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
function Blog() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { blogs } = data.hasura;
        return (
          <div id="blog" className="section blogposts mb-40 bg-white md:mb-56 xl:max-w-griddw xl:m-auto xl:mb-64">
            <div className="interior mb-16">
              <div className="md:flex md:justify-center">
                {blogs.map((blog: any) => (
                  <BlogPost {...blog} key={blog.id} />
                ))}
              </div>
              <button className="section-button my-4 md:mt-20">Toate noutățile</button>
            </div>
          </div>
        );
      }}
    />
  );
}
export default Blog;
