import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import CircularProgressBar from '../../../CircularProgressBar';
import ProgressBar from '../../../ProgressBar';
import GradientMap from '../../../GradientMap';
const query = graphql`
  query {
    hasura {
      publicServices: providers_aggregate(where: { supplier: { supplier_type: { private: { _eq: false } } } }) {
        aggregate {
          count
        }
      }
      privateServices: providers_aggregate(where: { supplier: { supplier_type: { private: { _eq: true } } } }) {
        aggregate {
          count
        }
      }
    }
  }
`;

function Statistics() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { publicServices, privateServices } = data.hasura;
        return (
          <div id="statistics" className="section circularprogressbar">
            <div className="bg-snow py-8 mb-32 xl:mb-56">
              <div className="md:flex">
                <CircularProgressBar
                  classCircularBar="md:w-1/2 xl:w-1/3"
                  public={publicServices.aggregate.count}
                  private={privateServices.aggregate.count}
                />
                <ProgressBar classProgressBar="hidden md:block md:w-1/2 xl:w-1/3 xl:m-auto" firstBar={21} secondBar={538} />
                <GradientMap classGradientMap="hidden xl:block xl:w-1/3 xl:m-auto" />
              </div>
              <button className="section-button my-1">Toate statisticile</button>
            </div>
          </div>
        );
      }}
    />
  );
}
export default Statistics;
