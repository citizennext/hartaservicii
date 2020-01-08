import React from 'react'
import omw from '../../../../assets/images/logo_OMV_Petrom.svg'

export default class Content extends React.Component {
  render() {
    return (
      <div id="section5" className="section blogposts bg-white">
        <div className="interior">
          <h3 className="border-b-8 border-leaf wide">Istoric Proiect</h3>
          <p className="py-10">
            Aici povestim scurt despre cum a pornit proiectul, cine, cum când, de ce. Ce a realizat până acum și cu ce oameni. Și
            ajungem în prezent, Citizen Next, de ce, cum.
          </p>
          <button className="small invert">detalii</button>
        </div>
        <div className="interior">
          <h3 className="border-b-8 border-leaf wide">Parteneri</h3>
          <img className="pt-10" src={omw} />
          <p className="py-10">
            Aici povestim de sursa datelor de la la guvern, de partenerul financiar OMV Petrom și amintim de toți ceilalți
            parteneri instituționali. Aici adăugăm și lista link-urilor utile. Suntem zgârciți cu logo-urile, însă.
          </p>
          <button className="small invert">detalii</button>
        </div>
      </div>
    )
  }
}
