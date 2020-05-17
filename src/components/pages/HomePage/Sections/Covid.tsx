import React from 'react';
import HsSlider from '../../../Slider';
import getSlug from 'speakingurl';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Link } from 'gatsby';
import { Ripple } from '../../../Ripple';
const query = gql`
  query {
    provider_covid_needs_aggregate(where: { verified: { _eq: true } }) {
      aggregate {
        count
      }
      nodes {
        provider {
          name
          id
          district
          location
          email
          phones {
            number
          }
        }
      }
    }
  }
`;
function Covid() {
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
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const { loading, error, data } = useQuery(query);
  if (loading) return <Ripple />;

  if (error) return <p>Error! ${error}</p>;
  const {
    nodes,
    aggregate: { count },
  } = data.provider_covid_needs_aggregate;
  return (
    <div id="covid" className="mb-40 bg-white md:mb-24 xl:max-w-griddw xl:m-auto xl:mb-32">
      <div className="mb-16">
        <h2 className="text-center mb-2">Nevoi de protecție #covid19 anunțate</h2>
        <h3 className="text-center mb-6 text-celeste">{`${count} servicii au publicat date până acum`}</h3>
        <div className="md:flex md:justify-center">
          <HsSlider settings={settings}>
            {nodes.map(({ provider }: any) => (
              <Link to={`harta/serviciu/${getSlug(provider.name)}/${provider.id}`} key={provider.id} className="no-underline">
                <div className=" rounded p-6 bg-celeste text-black ">
                  <strong className="ellipsis-clamp-1">{provider.name}</strong>
                  <span className="text-sm">
                    <strong>Localitate: </strong>
                    {provider.location}
                  </span>
                  {' | '}
                  <span className="text-sm">
                    <strong>Județ: </strong> {provider.district}
                  </span>
                </div>
              </Link>
            ))}
          </HsSlider>
        </div>
      </div>
    </div>
  );
}
export default Covid;
