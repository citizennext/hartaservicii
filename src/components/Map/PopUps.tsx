import React, { Component } from 'react';
import { LatLngTuple } from 'leaflet';
import iconClose from '../../assets/images/icon_Close.svg';
import hssLogo from '../../assets/images/icon_HSS_symbolleaf.svg';
// @ts-ignore
import StarRatingComponent from 'react-star-rating-component';
import iconShare from '../../assets/images/icon_share.svg';
import iconDirections from '../../assets/images/icon_directions.svg';

type Provider = {
  id: string;
  coordinates: LatLngTuple;
  address: string;
  name: string;
  location: string;
  capacity: number;
  district: string;
  email: string;
  license_by: string;
  license_date_5years: string;
  license_date_provisional: string;
  license_no: string;
};

type Props = {
  item?: Provider;
  onClose: () => void;
};

type State = {
  rating: number;
};

export default class Providers extends Component<Props, State> {
  state = {
    rating: 1,
  };

  onStarClick(nextValue: any) {
    this.setState({ rating: nextValue });
  }

  render() {
    const item = this.props.item;
    const { rating } = this.state;
    const noStars = 5;
    const averageRateing = 4.3; // @todo Seco, St3phan - trebuie aduagata valoare medie a ratingurilor
    const percentRateing = (averageRateing * 100) / noStars;

    if (!item) return null;
    return (
      <section className="map-marker-popup" id="map-marker-popup" data-id={item.id}>
        <header>
          <div className="popup-logo">
            <img src={hssLogo} />
          </div>
          <button className="close-map-marker-popup" onClick={this.props.onClose}>
            <img src={iconClose} />
          </button>
        </header>
        <div className="main-section">
          <h2>{item.name}</h2>
          <h3 className="pin-name">[Asociatia]</h3>
          <div className="pin-id">
            <p>
              Nr. identificare:<span>52389</span>
            </p>
            <p className="pin-eval">
              <span>Evaluare utilizatori</span>
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
              Capacitate: <span>12</span>
            </p>
            <p>
              Directii
              <a href="#">
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
            <span>Strada Carpați nr. 16, Mediaș, Sibiu</span>
          </div>
          <div className="pin-phone">
            <p>Telefon</p>
            <span>+40 799 566 533</span>
            <span>+40 799 522 533</span>
          </div>
          <div className="pin-web">
            <p>Web</p>
            <a href="#">www.facebook.com/centruldefemeiEstera </a>
          </div>
          <div className="pin-services">
            <p>Servicii</p>
            <ul>
              <li>▶ Consiliere psihologică și suport emoțional</li>
              <li>▶ Supraveghere</li>
              <li>▶ Consiliere juridică</li>
              <li>▶ Educare</li>
              <li>▶ Reintegrare familială și comunitară</li>
              <li>▶ Cazare pe perioadă determinată sau cazare pe timp de noapte</li>
              <li>▶ Masă</li>
              <li>▶ Menaj Curățenie</li>
            </ul>
          </div>
          <div className="pin-provider">
            <div>
              <p>Administrator: </p>
              <p>Privat</p>
            </div>
            <div>
              <p>Nume furnizor: </p>
              <p>Biserica Luterană Maica Luminii și Îngăduinței</p>
            </div>
            <div>
              <p>CUI furnizor: </p>
              <p>RO 36689963</p>
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
              <p>06.12.2015</p>
            </div>
            <div>
              <p>Serie și număr certificat: </p>
              <p>HY 236 369</p>
            </div>
            <div>
              <p>Cod serviciu social: </p>
              <p>GH 5698133</p>
            </div>
            <div>
              <p>Dată licență provizorie: </p>
              <p>12.08.2008</p>
            </div>
            <div>
              <p>Număr și serie licență de funcționare: </p>
              <p>GH786 / 235984</p>
            </div>
            <div>
              <p>Instituția care a eliberat licența: </p>
              <p>Judecătoria Mediaș</p>
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
              onStarClick={this.onStarClick.bind(this)} /* on icon click handler */
              renderStarIcon={() => <span>●</span>}
              starColor="#6FBBB7"
              emptyStarColor="transparent"
            />
          </div>
        </footer>
      </section>
    );
  }
}
