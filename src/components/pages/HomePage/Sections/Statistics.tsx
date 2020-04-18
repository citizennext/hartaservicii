import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import CircularProgressBar from '../../../CircularProgressBar';
import ProgressBar from '../../../ProgressBar';
import HsSlider from '../../../Slider';
import StatisticsMap from '../../../StatisticsMap';
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
      services: providers_aggregate {
        aggregate {
          count
        }
        nodes {
          district
        }
      }
    }
  }
`;

function Statistics() {
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
      render={data => {
        const { publicServices, privateServices, homelessServices, childServices, services } = data.hasura;
        return (
          <div id="statistics" className="section circularprogressbar">
            <div className="bg-snow py-8 mb-32 xl:mb-56">
              <div className="xl:max-w-griddw xl:m-auto">
                <HsSlider settings={settings}>
                  <CircularProgressBar
                    firstBar={publicServices.aggregate.count}
                    secondBar={privateServices.aggregate.count}
                    firstBarLabel="publice"
                    secondBarLabel="private"
                    title="Centre servicii sociale lincențiate pe tot teritoriul țării"
                  />
                  <ProgressBar firstBar={homelessServices.aggregate.count} secondBar={childServices.aggregate.count} />
                  {/* @todo Seco -> aici trebuie sa vezi stilizari pe responsive */}
                  <StatisticsMap
                    title="Distribuția serviciilor sociale pe județe"
                    data={services}
                    total={services.aggregate.count}
                  />
                </HsSlider>
              </div>
              <Link to="/statistici">
                <button className="button section-button my-1">Toate statisticile</button>
              </Link>
            </div>
          </div>
        );
      }}
    />
  );
}
export default Statistics;
