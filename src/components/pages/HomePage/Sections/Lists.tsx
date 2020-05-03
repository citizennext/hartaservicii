import Data from '../../../../data/global.json';
import React from 'react';
import Img from 'gatsby-image';
import { Button } from '../../../Buttons';
import { StaticQuery, graphql, Link } from 'gatsby';
const query = graphql`
  query {
    face1: file(relativePath: { regex: "/hp_section2.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    face2: file(relativePath: { regex: "/hp_section22.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
function Lists() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        return (
          <div id="section2" className="section ">
            <div className="my-32 md:flex md:max-w-gridt md:m-auto md:mt-48 md:mb-40 xl:max-w-gridd xl:pt-8 xl:mb-40 xl:pb-4">
              <div className="flex flex-col bg-snow mb-36 md:mb-0 md:w-1/2 md:ml-2 xl:ml-4 xl:mr-8">
                <div className="sl-top">
                  <div className="list-image bg-white border-4 rounded-full border-burg -mt-20 p-2 content-center m-auto">
                    <Img fixed={data.face1.childImageSharp.fixed} alt="" />
                  </div>
                </div>
                <h3 className="border-white border-b-4 text-center pt-4">{Data.page.homepage.content.section2.title}</h3>
                <div className="flex flex-col interior my-8 p-6 md:p-0 ">
                  <ol className="list-none mb-0">
                    <li>{Data.page.homepage.content.section2.list1}</li>
                    <li>{Data.page.homepage.content.section2.list2}</li>
                    <li>{Data.page.homepage.content.section2.list3}</li>
                  </ol>
                </div>
                <Link to={Data.page.homepage.links.section2.url} className="w-full -mb-6">
                  <Button className="btn-celeste btn-full">{Data.page.homepage.links.section2.label}</Button>
                </Link>
              </div>
              <div className="flex flex-col bg-snow md:w-1/2 md:ml-2 xl:ml-4 xl:mr-8">
                <div className="sl-top">
                  <div className="list-image bg-white border-4 rounded-full border-burg -mt-20 p-2 content-center m-auto">
                    <Img fixed={data.face2.childImageSharp.fixed} alt="" />
                  </div>
                </div>
                <h3 className="border-white border-b-4 text-center pt-4">{Data.page.homepage.content.section3.title}</h3>
                <div className="flex flex-col interior my-8 p-6 md:p-0">
                  <ol className="list-none mb-0">
                    <li>{Data.page.homepage.content.section3.list1}</li>
                    <li>{Data.page.homepage.content.section3.list2}</li>
                    <li>{Data.page.homepage.content.section3.list3}</li>
                  </ol>
                </div>
                <Link to={Data.page.homepage.links.section2.url} className="w-full -mb-6">
                  <Button className="btn-celeste btn-full">{Data.page.homepage.links.section2.label}</Button>
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

export default Lists;
