import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { Map, Marker, TileLayer } from 'react-leaflet';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Leaflet, { LatLngTuple } from 'leaflet';
import CopyToClipboard from 'react-copy-to-clipboard';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import hssLogo from '../../assets/images/icon_HSS_symbolleaf.svg';
import StarRatingComponent from 'react-star-rating-component';
import iconDirections from '../../assets/images/icon_directions.svg';
import iconShare from '../../assets/images/icon_share.svg';
import iconClose from '../../assets/images/icon_arrowg.svg';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Button } from '../../components/Buttons';

function Provider(props: any) {
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
            private
          }
        }
        service {
          name
          code
        }
        provider_covid_needs(where: { verified: { _eq: true } }, order_by: { created_at: desc }, limit: 1) {
          chlor
          created_at
          handDesinfectant
          masks
          protectionGlasses
          protectionHood
          sanitaryAlchohol
          surfaceDesinfectant
          surgicalGown
          surgicalGownSingleUse
          surgicalHandgloves
          surgicalMasks
          surgicalShoeProtection
        }
      }
    }
  `;
  const windowSize = useWindowSize();
  const [rating, setRating] = useState<number>(0);
  const provider = props.id;
  const { loading, error, data } = useQuery(providersQuery, {
    variables: { provider },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;
  const providers = data.providers_by_pk;
  const averageRating = (providers.rating_aggregate.aggregate.avg.rating / 10).toFixed(1);
  const percentageRating = (providers.rating_aggregate.aggregate.avg.rating * 100) / 50;
  // @ts-ignore
  const zoomControl: boolean = windowSize.width >= 768;
  const position: LatLngTuple = providers.coordinates;
  const saveRating = (value: number) => {
    setRating(value);
    navigate(`rating`, { state: { rating } });
  };
  return (
    <>
      <Map
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        zoomControl={zoomControl}
        className="markercluster-map-single markercluster-map">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={providers.coordinates} icon={createMarkerCustomIcon()} />
      </Map>
      <div className="content-box">
        <section className="map-marker-popup-single">
          <NotificationContainer />
          <header className="px-6 py-5 md:px-12 relative rounded-t-lg bg-celeste border-b-6 border-leaf">
            <div className="popup-logo">
              <img src={hssLogo} />
            </div>
            <Link to="/harta">
              <button className="close-map-marker-popup">
                <img src={iconClose} />
              </button>
            </Link>
          </header>
          <div className="grid md:grid-cols-2 bg-white px-6 md:px-0">
            <div className="px-0 md:px-12 pb-6 pt-3">
              <h2 className="border-b border-snow py-6">{providers.name}</h2>
              <p className="border-b border-snow py-6">{providers.supplier.name}</p>
              <div className="grid grid-cols-2 py-6 border-b border-snow">
                <p>
                  <strong>Nr. licență</strong>
                  <br />
                  <span className="font-semibold text-celeste text-xl">{providers.license_no}</span>
                </p>
                <div className="pin-eval">
                  <strong className="font-body">Evaluare utilizatori</strong>
                  <br />
                  <span className="font-semibold text-celeste text-xl">{averageRating}</span>
                  <div className="rating-parent">
                    <div className="rating-child" style={{ width: `${percentageRating}%` }}>
                      <StarRatingComponent
                        name="rate" /* name of the radio input, it is required */
                        value={1} /* number of selected icon (`0` - none, `1` - first) */
                        starCount={5} /* number of icons in rating, default `5` */
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
              <div className="grid grid-cols-3 py-6 border-b border-snow">
                <p>
                  <strong>Capacitate</strong> <br />
                  <span className="font-normal text-celeste text-4xl">{providers.capacity ? providers.capacity : '-'}</span>
                </p>
                <p>
                  <strong>Direcții</strong>
                  {providers.coordinates ? (
                    <a
                      href={'https://www.google.ro/maps/search/' + providers.coordinates}
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={iconDirections} className="bg-snow rounded-full p-3 w-12 h-12" />
                    </a>
                  ) : (
                    '-'
                  )}
                </p>
                <p>
                  <strong>Distribuție</strong>
                  <br />
                  <CopyToClipboard text={location.href}>
                    <button
                      // className="share-button"
                      className="bg-snow rounded-full p-2 w-12 h-12"
                      onClick={() => NotificationManager.success('Link copiat în clipboard!')}>
                      <img src={iconShare} className="m-auto" />
                    </button>
                  </CopyToClipboard>
                </p>
              </div>
              <div className="pin-address py-6 border-b border-snow">
                <p>
                  <strong>Adresă</strong>
                </p>
                <span>
                  {providers.address ? providers.address : '-'}, {providers.location ? providers.location : '-'},{' '}
                  {providers.district}
                </span>
              </div>
              {providers.phone && (
                <div className="pin-phone">
                  <p>
                    <strong>Telefon</strong>
                  </p>
                  <span>{providers.phone}</span>
                </div>
              )}
              <div className="pin-services py-6 font-body">
                <p>
                  <strong>Tip / cod serviciu </strong>
                </p>
                <span>
                  {providers.service.name} ({providers.service.code})
                </span>
                <div className="pin-license">
                  <div>
                    <p>
                      <strong>Dată licență</strong>{' '}
                    </p>
                    <span>
                      {providers.license_date_5years ? providers.license_date_5years : providers.license_date_provisional}
                    </span>
                  </div>
                  <div>
                    <p>
                      <strong>Instituția care a eliberat licența</strong>{' '}
                    </p>
                    <span>{providers.license_by ? providers.license_by : '-'}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mx-6 px-6 md:mx-0 md:px-12 pb-6 pt-6 bg-snow">
              <table className="table-auto font-body">
                <tbody>
                  <tr className="h-16">
                    <td>Administrator: </td>
                    <td className="font-bold">{providers.supplier.supplier_type.private ? 'Privat' : 'Public'}</td>
                  </tr>
                  <tr className="h-16">
                    <td>Tip furnizor: </td>
                    <td className="font-bold">{providers.supplier.supplier_type.name}</td>
                  </tr>
                  <tr className="h-16">
                    <td>Nume furnizor: </td>
                    <td className="font-bold">{providers.supplier.name ? providers.supplier.name : '-'}</td>
                  </tr>
                  <tr className="h-16">
                    <td>CUI furnizor: </td>
                    <td className="font-bold">{providers.supplier.cui_cif ? providers.supplier.cui_cif : '-'}</td>
                  </tr>
                  <tr className="h-16">
                    <td>Număr decizie: </td>
                    <td className="font-bold">{providers.supplier.decision_no ? providers.supplier.decision_no : '-e'}</td>
                  </tr>
                  <tr className="h-16">
                    <td>Dată decizie: </td>
                    <td className="font-bold">{providers.supplier.decision_date ? providers.supplier.decision_date : '-'}</td>
                  </tr>
                  <tr className="h-16">
                    <td>Serie și număr certificat: </td>
                    <td className="font-bold">
                      {providers.supplier.certificate_serial_no ? providers.supplier.certificate_serial_no : '-'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <footer className="grid md:grid-cols-2">
            <div className="p-6 md:p-12 border-b border-brown">
              <h3 className="text-white">Ce nevoie are centrul, cum poti sa ajuti?</h3>
              {providers.provider_covid_needs[0] ? (
                <table className="table-auto text-white ml-12">
                  <thead>
                    <tr>
                      <th className="text-left  px-0 py-2">Nevoi</th>
                      <th className="px-0 py-2 text-center">Cantitate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {providers.provider_covid_needs[0].surgicalMasks && (
                      <tr>
                        <td className="border-b border-t border-brown border-dotted px-0 py-2">Măști chirurgicale (buc):</td>
                        <td className="border-b border-t border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].surgicalMasks}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].surgicalHandgloves && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Mănuși chirurgicale (buc):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].surgicalHandgloves}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].handDesinfectant && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Dezinfectant mâini (litri):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].handDesinfectant}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].surfaceDesinfectant && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Dezinfectant suprafețe (litri):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].surfaceDesinfectant}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].masks && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Măști filtru FFP2-3 (buc):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].masks}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].visors && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Viziere protecție (buc):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].visors}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].chlor && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Clor (litri):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].chlor}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].surgicalGown && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Combinezoane protecție (buc):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].surgicalGown}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].sanitaryAlchohol && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Alcohol sanitar (litri):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].sanitaryAlchohol}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].protectionGlasses && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Botoși unică folosință (buc):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].protectionGlasses}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].surgicalShoeProtection && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Ochelari protecție (buc):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].surgicalShoeProtection}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].protectionHood && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Bonete (buc):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].protectionHood}
                        </td>
                      </tr>
                    )}
                    {providers.provider_covid_needs[0].surgicalGownSingleUse && (
                      <tr>
                        <td className="border-b border-brown border-dotted px-0 py-2">Halate unică folosință (buc):</td>
                        <td className="border-b border-brown border-dotted px-0 py-2 text-center">
                          {providers.provider_covid_needs[0].surgicalGownSingleUse}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              ) : (
                <p>Acest serviciu nu are momentan nici o nevoie semnalată în platformă</p>
              )}
            </div>
            <div className="p-6 md:p-12 border-b border-brown md:border-0">
              <h3 className="text-white">Ești furnizor de servicii sociale?</h3>
              <Link to="adauga-nevoi-covid">
                <Button className="mt-4">Adauga nevoi covid19</Button>
              </Link>
            </div>
            <div className="p-6 md:p-12 border-b border-brown">
              <h3 className="text-white">Actualizare informații</h3>
              <p>
                Informațiile primite vor fi folosite pentru a completa și actualiza datele acestui centru - de exemplu număr de
                telefon.
              </p>
              <a href="mailto@contact@serviciisociale.ro">
                <Button className="mt-4">Contactează-ne</Button>
              </a>
            </div>
            <div className="p-6 md:p-12 border-b border-brown md:border-0">
              <h3 className="text-white">Evaluare centru</h3>
              <p>Dacă cunoști situația din acest centru din experiență proprie, oferă un indicativ aici:</p>
              <StarRatingComponent
                name="ratei" /* name of the radio input, it is required */
                value={rating} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                onStarClick={(value: number) => saveRating(value)} /* on icon click handler */
                onStarHover={(value: number) => setRating(value)} /* on icon hover handler */
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
