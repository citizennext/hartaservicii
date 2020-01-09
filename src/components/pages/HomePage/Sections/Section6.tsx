import React from 'react'
import Illu from '../../../../assets/images/illu_partner.svg'
import Notype from '../../../../assets/images/logo_notype.svg'

export default class Content extends React.Component {
  render() {
    return (
      <div id="section6" className="section blogposts bg-white pt-12 md:pt-24 md:pb-32">
        <div className="interior md:flex">
          <div className="md:w-1/2 md:mr-2">
            <h3 className="wide">Hai alături de noi</h3>
            <div className="flex">
              <img style={{ width: '213px', zIndex: '1' }} src={Illu} />
              <img className="-ml-12" style={{ width: '160px', zIndex: '0' }} src={Notype} />
            </div>
            <button className="social">Comunitate</button>
          </div>
          <div className="md:w-1/2 md:ml-2 md:self-end">
            <p className="py-8">
              {' '}
              Aici scriem ce avem nevoie de la public, de la vizitatori.Să promoveze proiectul pe social media, să se partenerize
              cu noi instituțional - avem nevoie și de alți parteneri financiari ?
            </p>
            <button>Contact</button>
          </div>
        </div>
      </div>
    )
  }
}
