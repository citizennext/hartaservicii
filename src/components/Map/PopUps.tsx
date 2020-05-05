import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Link, navigate } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import StarRatingComponent from 'react-star-rating-component';
import CopyToClipboard from 'react-copy-to-clipboard';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { X as Close } from 'react-feather';
// import RatingReview from './RatingReview';
import hssLogo from '../../assets/images/icon_HSS_symbolleaf.svg';
import iconDirections from '../../assets/images/icon_directions.svg';
import iconShare from '../../assets/images/icon_share.svg';

function PopUps(props: any) {
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
        phone
        license_by
        license_date_5years
        license_date_provisional
        license_no
        rating_aggregate {
          nodes {
            id
            rating
            user {
              username
            }
            feedback
          }
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
          service_offers {
            offer {
              id
              name
            }
          }
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
  const saveRating = (value: number) => {
    setRating(value);
    navigate(`rating`, { state: { rating } });
  };
  // @ts-ignore
  return (
    <section className="map-marker-popup">
      <NotificationContainer />
      <header className="px-6 py-5 relative rounded-t-lg bg-celeste border-b-6 border-leaf">
        <div className="popup-logo">
          <img src={hssLogo} />
        </div>
        <button className="close-map-marker-popup" onClick={props.onDismiss}>
          <Close className="text-celeste" size={30} />
        </button>
      </header>
      <div className="grid bg-white md:px-0">
        <div className="px-6 pb-6 pt-3">
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
                <a href={'https://www.google.ro/maps/search/' + providers.coordinates} target="_blank" rel="noopener noreferrer">
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
          <div className="pin-address py-6">
            <p>
              <strong>Adresă</strong>
            </p>
            <span>
              {providers.address ? providers.address : '-'}, {providers.location ? providers.location : '-'}, {providers.district}
            </span>
          </div>
          {providers.email && (
            <div className="pin-email py-6">
              <p>
                <strong>Email</strong>
              </p>
              <span>{providers.email}</span>
            </div>
          )}
          {providers.phone && (
            <div className="pin-phone py-6">
              <p>
                <strong>Telefon</strong>
              </p>
              <span>{providers.phone}</span>
            </div>
          )}
          <div className="pin-services py-6 font-body border-t border-snow">
            <p>
              <strong>Tip / cod serviciu </strong>
            </p>
            <span>
              {providers.service.name} ({providers.service.code})
            </span>
            <br />
            <strong>Servicii oferite:</strong>
            <ul>
              {providers.service.service_offers.map((offer: { offer: { id: string; name: string } }) => (
                <li key={offer.offer.id}>{offer.offer.name}</li>
              ))}
            </ul>
          </div>
          <div className="pin-license  grid grid-cols-2 py-6 border-t border-snow">
            <div>
              <p>
                <strong>Dată licență</strong>{' '}
              </p>
              <span>{providers.license_date_5years ? providers.license_date_5years : providers.license_date_provisional}</span>
            </div>
            <div>
              <p>
                <strong>Instituția care a eliberat licența</strong>{' '}
              </p>
              <span>{providers.license_by ? providers.license_by : '-'}</span>
            </div>
          </div>
        </div>
        <div className="px-6 pb-6 pt-6 bg-snow">
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
      <footer className="grid pb-12">
        <div className="p-6 border-b border-brown">
          <h3 className="text-white">Ce nevoie are centrul, cum poti sa ajuti?</h3>
          {providers.provider_covid_needs[0] ? (
            <table className="table-auto text-white ml-0 font-body">
              <thead>
                <tr>
                  <th className="text-left  px-0 py-2 text-sm">Nevoi</th>
                  <th className="px-0 py-2 text-center text-sm">Cantitate</th>
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
        <div className="p-6 border-b border-brown">
          <h3 className="text-white">Ești furnizor de servicii sociale?</h3>
          <Link to="adauga-nevoi-covid" className="btn btn-celeste mt-4 hover:no-underline">
            Adauga nevoi covid19
          </Link>
        </div>
        <div className="p-6 border-b border-brown">
          <h3 className="text-white">Actualizare informații</h3>
          <p>
            Informațiile primite vor fi folosite pentru a completa și actualiza datele acestui centru - de exemplu număr de
            telefon.
          </p>
          <a
            href="mailto:contact@serviciisociale.ro?subject=Actualizare date"
            className="btn btn-celeste mt-4 hover:no-underline">
            Contactează-ne
          </a>
        </div>
        <div className="p-6 border-b border-brown">
          <h3 className="text-white">Testimoniale</h3>
          <ul className="font-body italic">
            {providers.rating_aggregate.nodes.map(
              (testimonial: { id: string; rating: number; feedback: string; user: { username: string } }) => {
                return (
                  <li key={testimonial.id} className="py-2 border-dotted border-b border-brown">
                    {testimonial.feedback}

                    <span className="block w-full text-right font-bold">
                      {testimonial.user.username} ({testimonial.rating / 10}/5)
                    </span>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="p-6 border-b border-brown">
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
  );
}

export default PopUps;
