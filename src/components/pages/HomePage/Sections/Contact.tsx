import React from 'react';
import Illu from '../../../../assets/images/illu_partner.svg';
import Notype from '../../../../assets/images/logo_notype.svg';
import { Link } from 'gatsby';

export default class Contact extends React.Component {
  render() {
    return (
      <div
        id="contact"
        className="section blogposts bg-white pt-12 md:pt-24 md:mt-40 md:pb-32 md:m-auto md:max-w-gridt xl:max-w-gridt xl:m-auto xl:pt-24 xl:mt-40 xl:pb-48">
        <div className="interior md:flex">
          <div className="contact-left md:w-1/2 md:mr-2">
            <h3 className="wide pl-8">Hai alături de noi!</h3>
            <div className="flex justify-center xl:relative">
              <img className="illu-logo" src={Illu} alt="Illu Logo" />
              <img className="no-type" src={Notype} alt="HS Logo" />
            </div>
            <a
              className="button social md:ml-6"
              href="https://www.facebook.com/hartaserviciilorsociale"
              target="_blank"
              rel="noopener noreferrer">
              Comunitate
            </a>
          </div>
          <div className="contact-right mb-32 md:w-1/2 md:mb-0 md:ml-2 md:self-end">
            <p className="py-8">
              Dacă dorești să fii voluntar sau să devii partener al proiectului, suntem nerăbdători să ne contactezi și să începem
              colaborarea.
            </p>
            <Link to="/contact" className="button">
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
