import Data from '../../../../data/global.json';
import React from 'react';
import Separator from '../../../Separator';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

function Hero() {
  return (
    <StaticQuery
      query={graphql`
        query heroQuery {
          file(relativePath: { regex: "/HSS_people_clean_2000.png/" }) {
            childImageSharp {
              fluid(maxWidth: 870, srcSetBreakpoints: [375, 768, 870]) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div id="hero" className="section">
            <div className="interior md:flex md:max-w-gridt xl:max-w-griddw xl:m-auto xl:justify-between">
              <div className="md:w-1/3 xl:w-1/4">
                <h1 className="py-4 md:pt-10 xl:pt-20">{Data.page.homepage.content.title}</h1>
                <p className="pb-4">{Data.page.homepage.content.intro}</p>
                <button
                  className="small mb-4"
                  formAction={Data.page.homepage.links.intro.url}
                  title={Data.page.homepage.links.intro.title}>
                  {Data.page.homepage.links.intro.label}
                </button>
              </div>
              <div className="hero-image md:w-2/3 md:-ml-0 xl:-ml-0 xl:w-3/4 xl:self-end">
                <Img fluid={data.file.childImageSharp.fluid} alt="" />
                <div className="search-icon">
                  <input
                    id="search"
                    className="border-burg border-6 rounded-full background-white absolute -mt-24 pl-10"
                    placeholder="Caută serviciu, zonă sau tipologie beneficiar"
                  />
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
