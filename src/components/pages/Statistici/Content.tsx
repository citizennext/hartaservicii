import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import CircularProgressBar from '../../CircularProgressBar';
import ProgressBar from '../../ProgressBar';
import StatisticsMap from '../../StatisticsMap';
import PieChart from 'react-minimal-pie-chart';

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
  const [districtWithoutShelter, setDistrictWithoutShelter] = useState('');
  const [districtChildren, setDistrictChildren] = useState('');

  const onMouseOver = (e: any, pie: string) => {
    if (pie === 'dWithoutShelter') {
      setDistrictWithoutShelter(e.target.firstChild?.firstChild.data);
    }
    if (pie === 'dChildren') {
      setDistrictChildren(e.target.firstChild?.firstChild.data);
    }
  };

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

          // @ts-ignore
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
              <div className="grid-statistic-item last-item">
                <div className="pie-chart">
                  <PieChart
                    data={[
                      { title: 'Cluj', value: 10, color: '#6fbab6' },
                      { title: 'Bistrita-Nasaud', value: 11, color: '#6fbab6' },
                      { title: 'Alba', value: 3, color: '#6fbab6' },
                      { title: 'Maramures', value: 2, color: '#6fbab6' },
                      { title: 'Bucuresti', value: 1, color: '#6fbab6' },
                      { title: 'Bihor', value: 6, color: '#6fbab6' },
                      { title: 'Salaj', value: 4, color: '#6fbab6' },
                      { title: 'Brasov', value: 9, color: '#6fbab6' },
                      { title: 'Sibiu', value: 8, color: '#6fbab6' },
                      { title: 'Satu-Mare', value: 7, color: '#6fbab6' },
                    ]}
                    animate={true}
                    animationDuration={500}
                    animationEasing="ease-out"
                    cx={50}
                    cy={50}
                    label={true}
                    labelPosition={70}
                    lengthAngle={360}
                    lineWidth={18}
                    onClick={undefined}
                    onMouseOut={undefined}
                    onMouseOver={e => {
                      onMouseOver(e, 'dWithoutShelter');
                    }}
                    paddingAngle={8}
                    radius={45}
                    startAngle={0}
                    viewBoxSize={[100, 100]}
                    className="centers-piechart centers-people-without-shelter inline-block mt-6"
                  />
                  <span className="pie-chart-district">{districtWithoutShelter}</span>
                </div>
                <p className="circle-total-amount text-center block mt-4">{homelessServices.aggregate.count}</p>
                <p className="circle-total block text-base text-center mt-4">Servicii pentru persoane fără adăpost</p>
              </div>
              <div className="grid-statistic-item last-item">
                <div className="pie-chart">
                  <PieChart
                    data={[
                      { title: 'Cluj', value: 34, color: '#CDE5C0' },
                      { title: 'Bistrita-Nasaud', value: 11, color: '#CDE5C0' },
                      { title: 'Alba', value: 32, color: '#CDE5C0' },
                      { title: 'Maramures', value: 8, color: '#CDE5C0' },
                      { title: 'Bucuresti', value: 1, color: '#CDE5C0' },
                      { title: 'Bihor', value: 6, color: '#CDE5C0' },
                      { title: 'Salaj', value: 4, color: '#CDE5C0' },
                      { title: 'Brasov', value: 25, color: '#CDE5C0' },
                      { title: 'Sibiu', value: 8, color: '#CDE5C0' },
                      { title: 'Satu-Mare', value: 15, color: '#CDE5C0' },
                    ]}
                    animate={true}
                    animationDuration={500}
                    animationEasing="ease-out"
                    cx={50}
                    cy={50}
                    label={true}
                    labelPosition={70}
                    lengthAngle={360}
                    lineWidth={18}
                    onClick={undefined}
                    onMouseOut={undefined}
                    onMouseOver={e => {
                      onMouseOver(e, 'dChildren');
                    }}
                    paddingAngle={8}
                    radius={45}
                    startAngle={0}
                    viewBoxSize={[100, 100]}
                    className="centers-piechart services-for-children inline-block mt-6"
                  />
                  <span className="pie-chart-district">{districtChildren}</span>
                </div>
                <p className="circle-total-amount text-center block mt-4">{childServices.aggregate.count}</p>
                <p className="circle-total block text-base text-center mt-4">Servicii pentru copii</p>
              </div>
              {/* @todo - if need an empty element */}
              {/*<div className="grid-statistic-item invisible lg:visible"></div>*/}
            </div>
          );
        }}
      />
    </div>
  );
}
