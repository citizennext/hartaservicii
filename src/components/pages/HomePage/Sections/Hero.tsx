import Data from '../../../../data/global.json';
import React from 'react';
import Separator from '../../../Separator';
import Img from 'gatsby-image';
import { StaticQuery, graphql, Link } from 'gatsby';
import { AutocompleteSearch } from '../../SearchResult/AutocompleteSearch';
function Hero() {
  return (
    <StaticQuery
      query={graphql`
        query heroQuery {
          file(relativePath: { regex: "/HSS_people_clean_2000.jpg/" }) {
            childImageSharp {
              fluid(
                maxWidth: 870
                srcSetBreakpoints: [375, 768, 870]
                duotone: { highlight: "#EDF7EF", shadow: "#999999", opacity: 60 }
              ) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <div id="hero" className="section">
            <div className="md:flex mx-auto md:max-w-gridt xl:max-w-griddw xl:m-auto xl:justify-between">
              <Separator color="burg" classSeparator="hidden xl:block" />
              <div className="p-6 md:p-0 md:w-1/3 xl:w-1/4">
                <h1 className="py-4 md:pt-10 xl:pt-20">{Data.page.homepage.content.title}</h1>
                <p className="pb-4">{Data.page.homepage.content.intro}</p>
                <Link to={Data.page.homepage.links.intro.url} className="btn btn-tight w-1/2 bg-white mb-4">
                  {Data.page.homepage.links.intro.label}
                </Link>
              </div>
              <div className="hero-image md:w-2/3 md:-ml-0 xl:-ml-0 xl:w-3/4 xl:self-end">
                <Separator color="celeste" classSeparator="xl:hidden" css={{ zIndex: 9 }} />
                <Img fluid={data.file.childImageSharp.fluid} alt="" />
                <div className="autocomplete-search">
                  <AutocompleteSearch />
                </div>
              </div>
              <Separator color="celeste" bottom="-6px" />
            </div>
          </div>
        );
      }}
    />
  );
}

export default Hero;
