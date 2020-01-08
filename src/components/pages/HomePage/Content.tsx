/** @jsx jsx */
import React, { Fragment } from 'react'
import { jsx } from '@emotion/core'
import CircularProgressBar from '../../CircularProgressBar'
import Data from '../../../data/global.json'
import hero from '../../../assets/images/hp_hero.png'
import section2 from '../../../assets/images/hp_section2.png'
import omw from '../../../assets/images/logo_OMV_Petrom.svg'
import echipa from '../../../assets/images/echipa.png'
import BlogPost from '../../BlogPost'

export default class Content extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="hero" className="section border-celeste border-b-8 mb-20">
          <div className="interior">
            <h1 className="py-4">{Data.page.homepage.content.title}</h1>
            <p className="pb-4">{Data.page.homepage.content.intro}</p>
            <button
              className="small mb-4"
              formAction={Data.page.homepage.links.intro.url}
              title={Data.page.homepage.links.intro.title}>
              {Data.page.homepage.links.intro.label}
            </button>
          </div>
          <img src={hero} />
          <input
            id="search"
            className="border-burg border-8 rounded-full background-white absolute -mt-24 w-4/5 pl-10 mx-8"
            placeholder="Caută"
          />
        </div>
        <div id="section2" className="section my-32 md:flex">
          <div className="section-list bg-snow mb-32">
            <div className="m-auto pt-2">
              <img src={section2} className="bg-white border-4 rounded-full border-burg -mt-20  p-2 content-center m-auto" />
            </div>
            <h3 className="border-white border-b-4 text-center pt-4">{Data.page.homepage.content.section2.title}</h3>
            <div className="section-list interior my-8 pb-4 md:w-1/2 relative">
              <ol className="list-none mb-10">
                <li>{Data.page.homepage.content.section2.list1}</li>
                <li>{Data.page.homepage.content.section2.list2}</li>
                <li>{Data.page.homepage.content.section2.list3}</li>
              </ol>
              <button className="-mt-2 absolute">{Data.page.homepage.links.section2.label}</button>
            </div>
          </div>
          <div className="section-list bg-snow">
            <div className="m-auto pt-2">
              <img src={section2} className="bg-white border-4 rounded-full border-burg -mt-20  p-2 content-center m-auto" />
            </div>
            <h3 className="border-white border-b-4 text-center pt-4">{Data.page.homepage.content.section3.title}</h3>
            <div className="section-list interior my-8 pb-4 md:w-1/2 relative">
              <ol className="list-none mb-10">
                <li>{Data.page.homepage.content.section3.list1}</li>
                <li>{Data.page.homepage.content.section3.list2}</li>
                <li>{Data.page.homepage.content.section3.list3}</li>
              </ol>
              <button className="-mt-2 absolute">{Data.page.homepage.links.section2.label}</button>
            </div>
          </div>
        </div>
        <div id="section3" className="section circularprogressbar">
          <div className="interior bg-snow py-8 mb-16">
            <CircularProgressBar publice={1396} private={1154} />
            <button className="my-1 absolute">Toate statisticile</button>
          </div>
        </div>
        <div className="section blogposts bg-white">
          <div className="interior mb-16">
            <img className="border-b-8 border-burg mb-4" src={echipa} />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <button className="my-4">Toate noutățile</button>
          </div>
        </div>
        <div id="section4" className="section blogposts bg-white">
          <div className="interior">
            <h3 className="border-b-8 border-leaf wide">Istoric Proiect</h3>
            <p className="py-10">
              Aici povestim scurt despre cum a pornit proiectul, cine, cum când, de ce. Ce a realizat până acum și cu ce oameni.
              Și ajungem în prezent, Citizen Next, de ce, cum.
            </p>
            <button className="small invert">detalii</button>
          </div>
        </div>
        <div id="section5" className="section blogposts bg-white pt-12">
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
        <div id="section6" className="section blogposts bg-white pt-12">
          <div className="interior">
            <h3 className="wide">Hai alături de noi</h3>
            <button className="social">Comunitate</button>
          </div>
        </div>
        <div id="section7" className="section blogposts bg-white pb-12">
          <div className="interior">
            <p className="py-8">
              Aici scriem ce avem nevoie de la public, de la vizitatori. Să promoveze proiectul pe social media, să se partenerize
              cu noi instituțional - avem nevoie și de alți parteneri financiari?
            </p>
            <button>Contact</button>
          </div>
        </div>
      </Fragment>
    )
  }
}
