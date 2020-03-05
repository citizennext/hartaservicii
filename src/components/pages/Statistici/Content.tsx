import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import CircularProgressBar from '../../CircularProgressBar';
import ProgressBar from '../../ProgressBar';
import StatisticsMap from '../../StatisticsMap';

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

export function Content() {
  return (
    <div className="wrapper">
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
            <div className="grid-statistics grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="grid-statistic-item">
                <CircularProgressBar
                  firstBar={publicServices.aggregate.count}
                  secondBar={privateServices.aggregate.count}
                  firstBarLabel="publice"
                  secondBarLabel="private"
                  classCircularBar="centers-of-services"
                  title="Centre servicii sociale lincențiate pe tot teritoriul țării"
                />
              </div>
              <div className="grid-statistic-item">
                <ProgressBar firstBar={homelessServices.aggregate.count} secondBar={childServices.aggregate.count} />
              </div>
              <div className="grid-statistic-item">
                <StatisticsMap title="Capacitate servicii sociale (locuri)" classStatisticsMap="statistics-map" />
              </div>
              <div className="grid-statistic-item last-item">
                <CircularProgressBar
                  firstBar={publicSuppliers.aggregate.count}
                  secondBar={privateSuppliers.aggregate.count}
                  firstBarLabel="publice"
                  secondBarLabel="private"
                  classCircularBar="supliers-of-services"
                  title="Furnizori de servicii sociale acreditați pe tot teritoriul țării"
                />
              </div>
              <div className="grid-statistic-item invisible lg:visible"></div>
              <div className="grid-statistic-item invisible lg:visible"></div>
            </div>
          );
        }}
      />
    </div>
  );
}
