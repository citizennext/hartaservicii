import React from 'react';
import omw from '../../../../assets/images/logo_OMV_Petrom.svg';
import Pin from '../../../../assets/images/icon_pin_full.svg';
import LogoF from '../../../../assets/images/icon_HSS_symbol.svg';
import ArrowB from '../../../../assets/images/icon_arrowb.svg';

export default class Content extends React.Component {
  render() {
    return (
      <div id="section5" className="section blogposts bg-white xl:max-w-gridd xl:m-auto xl:px-8">
        <div className="interior md:flex">
          <div className="md:w-1/2 md:mr-2">
            <h3 className="border-b-8 border-leaf wide">Istoric Proiect</h3>
            <div className="flex pt-10">
              <img style={{ width: '32px', marginRight: '36px' }} src={Pin} />
              <img style={{ width: '26px', marginRight: '36px' }} src={ArrowB} />
              <img style={{ width: '34px' }} src={LogoF} />
            </div>
            <p className="py-10">
              Aici povestim scurt despre cum a pornit proiectul, cine, cum când, de ce. Ce a realizat până acum și cu ce oameni.
              Și ajungem în prezent, Citizen Next, de ce, cum.
            </p>
            <button className="small invert">detalii</button>
          </div>
          <div className="md:w-1/2 md:ml-2">
            <h3 className="border-b-8 border-leaf wide">Parteneri</h3>
            <img className="pt-10" src={omw} />
            <p className="py-10">
              Aici povestim de sursa datelor de la la guvern, de partenerul financiar OMV Petrom și amintim de toți ceilalți
              parteneri instituționali. Aici adăugăm și lista link-urilor utile. Suntem zgârciți cu logo-urile, însă.
            </p>
            <button className="small invert">detalii</button>
          </div>
        </div>
      </div>
    );
  }
}
