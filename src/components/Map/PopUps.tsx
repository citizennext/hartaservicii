import React from 'react';
import iconClose from '../../assets/images/icon_Close.svg';
import hssLogo from '../../assets/images/icon_HSS_symbolleaf.svg';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import queryString from 'query-string';
// @ts-ignore
import StarRatingComponent from 'react-star-rating-component';
import iconShare from '../../assets/images/icon_share.svg';
import iconDirections from '../../assets/images/icon_directions.svg';

type Props = {
  onClose: () => void;
  provider: uuid;
};

type State = {
  rating: number;
};

const Providers: React.FC<Props> = () => {
  const provider = queryString.parse(location.search, { ignoreQueryPrefix: true }.provider).provider;

  const PROVIDERS = gql`
    query Providers($provider: uuid) {
      providers(where: { id: { _eq: $provider } }) {
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
        supplier {
          name
          cui_cif
          certificate_serial_no
        }
        service {
          name
          code
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(PROVIDERS, {
    variables: { provider },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error}</p>;
  const providers = data.providers;
  const averageRateing = 4.3;
  const percentRateing = (averageRateing * 100) / noStars;
  const noStars = 5;
  const { rating } = 1;

  // onStarClick(nextValue: any) {
  //   this.setState({ rating: nextValue });
  // }

  // render() {
  //   const { rating } = this.state;

  return (
    <section className="map-marker-popup" id="map-marker-popup" data-id={providers[0].id}>
      <header>
        <div className="popup-logo">
          <img src={hssLogo} />
        </div>
        <button className="close-map-marker-popup" onClick="">
          <img src={iconClose} />
        </button>
      </header>
      <div className="main-section">
        <pre>{providers[0].id}</pre>
        <h2>{providers[0].name}</h2>
        <h3 className="pin-name">{providers[0].supplier.name}</h3>
        <div className="pin-id">
          <p>
            Nr. identificare:<span>{providers[0].licence_no}</span>
          </p>
          <p className="pin-eval">
            Evaluare utilizatori
            <span className="average-rateing">{averageRateing}</span>
            <div className="rating-parent">
              <div className="rating-child" style={{ width: `${percentRateing}%` }}>
                <StarRatingComponent
                  name="rate" /* name of the radio input, it is required */
                  value={noStars} /* number of selected icon (`0` - none, `1` - first) */
                  starCount={noStars} /* number of icons in rating, default `5` */
                  onStarClick="none" /* on icon click handler */
                  renderStarIcon={() => <span className="rating-icon"></span>}
                  starColor="#6FBBB7"
                  renderStarIconHalf="rate"
                  emptyStarColor="transparent"
                  editing="true"
                />
              </div>
            </div>
          </p>
        </div>
        <div className="pin-capacity">
          <p>
            Capacitate: <span>{providers[0].capacity}</span>
          </p>
          <p>
            Directii
            <a href={'https://www.google.ro/maps/search/' + providers[0].name + '/' + providers[0].coordinates + ',16z'}>
              <img src={iconDirections} />
            </a>
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
            {providers[0].address ? providers[0].address : '-'}, {providers[0].location ? providers[0].location : '-'},{' '}
            {providers[0].district}
          </span>
        </div>
        <div className="pin-phone">
          <p>Telefon</p>
          <span>{providers[0].phone ? providers[0].phone : '-'}</span>
          <span>{providers[0].phone ? providers[0].phone : '-'}</span>
        </div>
        <div className="pin-web">
          <p>Web</p>
          <a href="#">www.facebook.com/centruldefemeiEstera </a>
        </div>
        <div className="pin-services">
          <p>Servicii</p>
          <ul>
            <li>{providers[0].service.name ? providers[0].service.name : '-'}</li>
          </ul>
        </div>
        <div className="pin-provider">
          <div>
            <p>Administrator: </p>
            <p>Privat</p>
          </div>
          <div>
            <p>Nume furnizor: </p>
            <p>{providers[0].supplier.name ? providers[0].supplier.name : '-'}</p>
          </div>
          <div>
            <p>CUI furnizor: </p>
            <p>{providers[0].supplier.cui_cif ? providers[0].supplier.cui_cif : '-'}</p>
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
            <p>{providers[0].licence_date}</p>
          </div>
          <div>
            <p>Serie și număr certificat: </p>
            <p>{providers[0].supplier.certificate_serial_no ? providers[0].supplier.certificate_serial_no : '-'}</p>
          </div>
          <div>
            <p>Cod serviciu social: </p>
            <p>GH 5698133</p>
          </div>
          <div>
            <p>Dată licență provizorie: </p>
            <p>{providers[0].licence_date_provisional}</p>
          </div>
          <div>
            <p>Număr și serie licență de funcționare: </p>
            <p>GH786 / {providers[0].licence_no}</p>
          </div>
          <div>
            <p>Instituția care a eliberat licența: </p>
            <p>{providers[0].licence_by}</p>
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
            starCount={noStars} /* number of icons in rating, default `5` */
            onStarClick="none" /* on icon click handler */
            renderStarIcon={() => <span>●</span>}
            starColor="#6FBBB7"
            emptyStarColor="transparent"
          />
        </div>
      </footer>
    </section>
  );
};

export default Providers;
