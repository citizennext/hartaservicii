import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Map, Marker, TileLayer } from 'react-leaflet';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import iconClose from '../../assets/images/icon_arrowg.svg';
import hssLogo from '../../assets/images/icon_HSS_symbolleaf.svg';
import StarRatingComponent from 'react-star-rating-component';
import iconShare from '../../assets/images/icon_share.svg';
import iconDirections from '../../assets/images/icon_directions.svg';
import Leaflet, { LatLngTuple } from 'leaflet';

function Provider(props: any) {
  const ratingMutation = gql`
    mutation MyMutation($provider: uuid!, $rating: Int!) {
      insert_provider_rating(objects: { provider_id: $provider, rating: $rating }) {
        returning {
          id
        }
      }
    }
  `;
  const providersQuery = gql`
    query Provider($provider: uuid!) {
      providers_by_pk(id: $provider) {
        id
        coordinates
        address
        name
        location
        capacity
        district
        email
        license_by
        license_date_5years
        license_date_provisional
        license_no
        rating_aggregate {
          aggregate {
            avg {
              rating
            }
          }
        }
        supplier {
          name
          cui_cif
          certificate_serial_no
          decision_date
          decision_no
          supplier_type {
            name
          }
        }
        service {
          name
          code
        }
      }
    }
  `;

  const [rating, setRating] = useState<number>(1);
  const provider = props.id;
  const { loading, error, data } = useQuery(providersQuery, {
    variables: { provider },
  });
  const [addRating] = useMutation(ratingMutation);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  const providers = data.providers_by_pk;
  const averageRating = (providers.rating_aggregate.aggregate.avg.rating / 10).toFixed(1);
  const percentageRating = (providers.rating_aggregate.aggregate.avg.rating * 100) / 50;
  const saveRating = (value: number) => {
    setRating(value);
    addRating({ variables: { provider: props.id, rating: value * 10 } });
  };

  const position: LatLngTuple = providers.coordinates;

  return (
    <>
      <Map center={position} zoom={17} scrollWheelZoom={false} className="markercluster-map-single markercluster-map">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={providers.coordinates} icon={createMarkerCustomIcon()} />
      </Map>
      <div className="popup-overlay">
        <section className="map-marker-popup-single" id="map-marker-popup" data-id={providers.id}>
          <header>
            <div className="popup-logo">
              <img src={hssLogo} />
            </div>
            <Link to="/harta">
              <button className="close-map-marker-popup">
                <img src={iconClose} />
              </button>
            </Link>
          </header>
          <div className="main-section">
            <h2>{providers.name}</h2>
            <h3 className="pin-name">{providers.supplier.name}</h3>
            <div className="pin-id">
              <p>
                Nr. licență:<span>{providers.license_no}</span>
              </p>
              <div className="pin-eval">
                Evaluare utilizatori
                <br />
                <span className="average-rateing">{averageRating}</span>
                <div className="rating-parent">
                  <div className="rating-child" style={{ width: `${percentageRating}%` }}>
                    <StarRatingComponent
                      name="rate" /* name of the radio input, it is required */
                      value={1} /* number of selected icon (`0` - none, `1` - first) */
                      starCount={5} /* number of icons in rating, default `5` */
                      /* onStarClick={(v: any) => setRating(v)} on icon click handler */
                      renderStarIcon={() => <span className="rating-icon"></span>}
                      starColor="#6FBBB7"
                      renderStarIconHalf={() => null}
                      emptyStarColor="transparent"
                      editing={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pin-capacity">
              <p>
                Capacitate: <span>{providers.capacity ? providers.capacity : '-'}</span>
              </p>
              <p>
                Directii
                {providers.coordinates ? (
                  <a
                    href={'https://www.google.ro/maps/search/' + providers.coordinates + ',16z'}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={iconDirections} />
                  </a>
                ) : (
                  '-'
                )}
              </p>
              <p>
                Distributie
                <a href="#">
                  <img src={iconShare} />
                </a>{' '}
              </p>
            </div>
            <div className="pin-address">
              <p>Adresă</p>
              <span>
                {providers.address ? providers.address : '-'}, {providers.location ? providers.location : '-'},{' '}
                {providers.district}
              </span>
            </div>
            <div className="pin-phone">
              <p>Telefon</p>
              <span>{providers.phone ? providers.phone : '-'}</span>
              <span>{providers.phone ? providers.phone : '-'}</span>
            </div>
            <div className="pin-web">
              <p>Web</p>
              <a href="#">- </a>
            </div>
            <div className="pin-services">
              <p>Servicii</p>
              <ul>
                <li>{providers.service.name ? providers.service.name : '-'}</li>
              </ul>
            </div>
          </div>
          <div className="pin-provider">
            <div>
              <p>Administrator: </p>
              <p>Privat</p>
            </div>
            <div>
              <p>Nume furnizor: </p>
              <p>{providers.supplier.name ? providers.supplier.name : '-'}</p>
            </div>
            <div>
              <p>CUI furnizor: </p>
              <p>{providers.supplier.cui_cif ? providers.supplier.cui_cif : '-'}</p>
            </div>
            <div>
              <p>Acreditat: </p>
              <p>Da</p>
            </div>
            <div>
              <p>Număr decizie: </p>
              <p>TOJ 5669213</p>
            </div>
            <div>
              <p>Dată decizie: </p>
              <p>{providers.license_date ? providers.license_date : '- '}</p>
            </div>
            <div>
              <p>Serie și număr certificat: </p>
              <p>{providers.supplier.certificate_serial_no ? providers.supplier.certificate_serial_no : '-'}</p>
            </div>
            <div>
              <p>Cod serviciu social: </p>
              <p>GH 5698133</p>
            </div>
            <div>
              <p>Dată licență provizorie: </p>
              <p>{providers.license_date_provisional ? providers.license_date_provisional : '-'}</p>
            </div>
            <div>
              <p>Număr și serie licență de funcționare: </p>
              <p>{providers.license_no ? providers.license_no : '-'}</p>
            </div>
            <div>
              <p>Instituția care a eliberat licența: </p>
              <p>{providers.license_by ? providers.license_by : '-'}</p>
            </div>
          </div>
          <footer>
            <div>
              <h3>Ce nevoie are centrul, cum poti sa ajuti?</h3>
            </div>
            <div className="pin-help">
              <p>Centrul primește donații / acceptă voluntariat:</p>
              <ul>
                <li>Donații haine</li>
                <li>Donații echipamente/obiecte</li>
                <li>Donații produse de igienă</li>
              </ul>
            </div>
            <div className="pin-update">
              <p>Actualizare informații</p>
              <p>
                Informațiile primite vor fi folosite pentru a completa și actualiza datele acestui centru - de exemplu număr de
                telefon.
              </p>
              <button className="">Trimit email</button>
            </div>

            <div className="pin-eval">
              <p>Evaluare centru</p>
              <p>Dacă cunoști situația din acest centru din experiență proprie, oferă un indicativ aici:</p>
              <StarRatingComponent
                name="ratei" /* name of the radio input, it is required */
                value={rating} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                onStarClick={(value: number) => saveRating(value)} /* on icon click handler */
                onStarHover={(value: number) => setRating(value)} /* on icon hover handler */
                // onStarHoverOut={() => setRating(1)}
                renderStarIcon={() => <span>●</span>}
                starColor="#6FBBB7"
                emptyStarColor="transparent"
              />
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}

function createMarkerCustomIcon() {
  return Leaflet.divIcon({
    html: `<div>
          <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.275 0C9.01947 0 5.89727 1.29326 3.59526 3.59526C1.29326 5.89727 0 9.01947 0 12.275C0.00953215 16.0268 1.15573 19.6877 3.2875 22.775C5.65916 25.8706 8.74207 28.3489 12.275 30C15.8024 28.3456 18.8804 25.8677 21.25 22.775C23.3862 19.6891 24.5368 16.0281 24.55 12.275C24.55 9.01947 23.2567 5.89727 20.9547 3.59526C18.6527 1.29326 15.5305 0 12.275 0V0ZM12.275 17.825C11.1773 17.825 10.1043 17.4995 9.19159 16.8897C8.27889 16.2798 7.56753 15.413 7.14747 14.3989C6.7274 13.3848 6.61749 12.2688 6.83164 11.1922C7.04579 10.1157 7.57438 9.12674 8.35056 8.35056C9.12674 7.57438 10.1157 7.04579 11.1922 6.83164C12.2688 6.61749 13.3848 6.7274 14.3989 7.14747C15.413 7.56753 16.2798 8.27889 16.8897 9.19159C17.4995 10.1043 17.825 11.1773 17.825 12.275C17.8217 13.7459 17.2359 15.1557 16.1958 16.1958C15.1557 17.2359 13.7459 17.8217 12.275 17.825Z" fill="currentColor"/>
          </svg>
        </div>`,
    className: 'marker text-brown',
  });
}

export default Provider;
