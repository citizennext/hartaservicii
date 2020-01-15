import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import CircularProgressBar from '../../../CircularProgressBar';
import ProgressBar from '../../../ProgressBar';
// import GradientMap from '../../../GradientMap';
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
      homelessServices: providers_aggregate(where: { service: { category: { name: { _like: "%fără adăpost%" } } } }) {
        aggregate {
          count
        }
      }
      childServices: providers_aggregate(where: { service: { category: { name: { _like: "%pentru copii%" } } } }) {
        aggregate {
          count
        }
      }
      publicSuppliers: suppliers_aggregate(where: { supplier_type: { private: { _eq: false } } }) {
        aggregate {
          count
        }
      }
      privateSuppliers: suppliers_aggregate(where: { supplier_type: { private: { _eq: true } } }) {
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
        const {
          publicServices,
          privateServices,
          homelessServices,
          childServices,
          publicSuppliers,
          privateSuppliers,
        } = data.hasura;
        return (
          <div id="statistics" className="section circularprogressbar">
            <div className="bg-snow py-8 mb-32 xl:mb-56">
              <div className="md:flex">
                <CircularProgressBar
                  classCircularBar="md:w-1/2 xl:w-1/3"
                  firstBar={publicServices.aggregate.count}
                  secondBar={privateServices.aggregate.count}
                  firstBarLabel="publice"
                  secondBarLabel="private"
                  title="Centre servicii sociale lincențiate pe tot teritoriul țării"
                />
                <ProgressBar
                  classProgressBar="hidden md:block md:w-1/2 xl:w-1/3 xl:m-auto"
                  firstBar={homelessServices.aggregate.count}
                  secondBar={childServices.aggregate.count}
                />
                <CircularProgressBar
                  classCircularBar="md:w-1/2 xl:w-1/3"
                  firstBar={publicSuppliers.aggregate.count}
                  secondBar={privateSuppliers.aggregate.count}
                  firstBarLabel="publice"
                  secondBarLabel="private"
                  title="Furnizori de servicii sociale acreditați pe tot teritoriul țării"
                />
                {/* <GradientMap classGradientMap="hidden xl:block xl:w-1/3 xl:m-auto" /> */}
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
