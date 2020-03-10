import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import StarRatingComponent from 'react-star-rating-component';
import CopyToClipboard from 'react-copy-to-clipboard';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { X as Close } from 'react-feather';
import hssLogo from '../../assets/images/icon_HSS_symbolleaf.svg';
import iconDirections from '../../assets/images/icon_directions.svg';

function PopUps(props: any) {
  const ratingMutation = gql`
    mutation AddRating($provider: uuid!, $rating: Int!, $email: String!, $feedback: String!, $username: String!) {
      insert_provider_rating(
        objects: {
          provider_id: $provider
          rating: $rating
          user: { data: { email: $email, username: $username, id: $username } }
          feedback: $feedback
        }
      ) {
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
            private
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
  const [email, setEmail] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [acceptSavingEmail, setAcceptance] = useState<boolean>(false);
  const [popup, setRatingPopUp] = useState<boolean>(false);
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
  const ratingPopUp = (popup: boolean, value: number) => {
    if (popup) {
      return (
        <div className="rating-popup">
          <button className="close-map-marker-popup" onClick={() => setRatingPopUp(false)}>
            <Close className="text-celeste" size={30} />
          </button>
          <>
            <div className="full">
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
            <label>
              Adresa ta de email nu va fi publicată. Comentariul tău va fi asociat unui numar de identificare alfanumeric.
            </label>
            <input
              type="email"
              name="email"
              placeholder="Adresa ta de email"
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
            />
            <textarea
              name="review"
              rows={5}
              placeholder="Lasă un testimonial despre acest serviciu social..."
              value={feedback}
              onChange={e => setFeedback(e.currentTarget.value)}
            />
            <label>Accept salvarea adresei de email si a testimonialului</label>
            <input type="checkbox" checked={acceptSavingEmail} onChange={() => setAcceptance(!acceptSavingEmail)} />
            <button
              type="submit"
              className="text-white"
              disabled={!acceptSavingEmail}
              onClick={() =>
                addRating({
                  variables: {
                    provider: props.id,
                    rating: value * 10,
                    email: email,
                    // @ts-ignore
                    username: email.match(/([^@]+)/g)[0],
                    feedback: feedback,
                  },
                })
              }>
              Salveaza
            </button>
          </>
        </div>
      );
    }
  };
  const saveRating = (value: number) => {
    setRating(value);
    setRatingPopUp(true);
  };
  return (
    <section className="map-marker-popup" id="map-marker-popup" data-id={providers.id}>
      <NotificationContainer />
      <header>
        <div className="popup-logo">
          <img src={hssLogo} />
        </div>
        <button className="close-map-marker-popup" onClick={props.onDismiss}>
          <Close className="text-celeste" size={30} />
        </button>
      </header>
      <div className="main-section">
        <h2>{providers.name}</h2>
        <h3 className="pin-name">{providers.supplier.name}</h3>
        <div className="pin-id">
          <p>
            Nr. licență<span>{providers.license_no}</span>
          </p>
          <div className="pin-eval">
            <strong>Evaluare utilizatori</strong>
            <br />
            <span className="average-rateing">{averageRating}</span>
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
        <div className="pin-capacity">
          <p>
            Capacitate <span>{providers.capacity ? providers.capacity : '-'}</span>
          </p>
          <p>
            Directii
            {providers.coordinates ? (
              <a href={'https://www.google.ro/maps/search/' + providers.coordinates} target="_blank" rel="noopener noreferrer">
                <img src={iconDirections} />
              </a>
            ) : (
              '-'
            )}
          </p>
          <p>
            Distributie
            <CopyToClipboard text={location.href}>
              <button className="share-button" onClick={() => NotificationManager.success('Link copiat în clipboard!')}></button>
            </CopyToClipboard>
          </p>
        </div>
        <div className="pin-address">
          <p>Adresă</p>
          <span>
            {providers.address ? providers.address : '-'}, {providers.location ? providers.location : '-'}, {providers.district}
          </span>
        </div>
        <div className="pin-phone">
          <p>Telefon</p>
          <span>{providers.phone ? providers.phone : '-'}</span>
        </div>
        <div className="pin-web">
          <p>Web</p>
          <span>-</span>
        </div>
        <div className="pin-services">
          <p>Tip / cod serviciu </p>
          <span>
            {providers.service.name} ({providers.service.code})
          </span>
          <div className="pin-license">
            <div>
              <p>Dată licență </p>
              <span>{providers.license_date_5years ? providers.license_date_5years : providers.license_date_provisional}</span>
            </div>
            <div>
              <p>Instituția care a eliberat licența </p>
              <span>{providers.license_by ? providers.license_by : '-'}</span>
            </div>
          </div>
        </div>
        <div className="pin-provider">
          <div>
            <p>Administrator: </p>
            <p>{providers.supplier.supplier_type.private ? 'Privat' : 'Public'}</p>
          </div>
          <div>
            <p>Tip furnizor: </p>
            <p>{providers.supplier.supplier_type.name}</p>
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
            <p>Număr decizie: </p>
            <p>{providers.supplier.decision_no ? providers.supplier.decision_no : '-e'}</p>
          </div>
          <div>
            <p>Dată decizie: </p>
            <p>{providers.supplier.decision_date ? providers.supplier.decision_date : '-'}</p>
          </div>
          <div>
            <p>Serie și număr certificat: </p>
            <p>{providers.supplier.certificate_serial_no ? providers.supplier.certificate_serial_no : '-'}</p>
          </div>
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
            renderStarIcon={() => <span>●</span>}
            starColor="#6FBBB7"
            emptyStarColor="transparent"
          />
        </div>
      </footer>
      {ratingPopUp(popup, rating)}
    </section>
  );
}

export default PopUps;
