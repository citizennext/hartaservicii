import React from 'react'

export default class Content extends React.Component {
  render() {
    return (
      <div id="section6" className="section blogposts bg-white pt-12">
        <div className="interior">
          <h3 className="wide">Hai alături de noi</h3>
          <button className="social">Comunitate</button>
        </div>
        <div className="interior">
          <p className="py-8">
            {' '}
            Aici scriem ce avem nevoie de la public, de la vizitatori.Să promoveze proiectul pe social media, să se partenerize cu
            noi instituțional - avem nevoie și de alți parteneri financiari ?
          </p>
          <button>Contact</button>
        </div>
      </div>
    )
  }
}
