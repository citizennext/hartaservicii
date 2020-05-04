import React from 'react';
import BlogPost from '../../../BlogPost';
import HsSlider from '../../../Slider';

import { graphql, StaticQuery, Link } from 'gatsby';
const query = graphql`
  query {
    hasura {
      blogs(last: 4, orderBy: publishedAt_DESC, where: { status: PUBLISHED }) {
        id
        publishedAt
        title
        summary
        slug
        image {
          url
          urlSharp {
            childImageSharp {
              fluid(maxHeight: 350, maxWidth: 770, duotone: { highlight: "#EDF7EF", shadow: "#999999", opacity: 60 }) {
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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StaticQuery
      query={query}
      render={(data: { hasura: any }) => {
        const { blogs } = data.hasura;
        return (
          <div id="blog" className="mb-16 bg-white md:mb-24 xl:max-w-griddw xl:m-auto xl:mb-32">
            <div className="mb-16">
              <div className="md:flex md:justify-center">
                <HsSlider settings={settings}>
                  {blogs.map((blog: any) => (
                    <BlogPost {...blog} key={blog.id} />
                  ))}
                </HsSlider>
              </div>
            </div>
            <Link to="/noutati" className="btn btn-celeste btn-full btn-arrow md:mx-auto -mb-6">
              Toate noutățile
            </Link>
          </div>
        );
      }}
    />
  );
}
export default Blog;
