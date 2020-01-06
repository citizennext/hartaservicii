/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Data from '../../../data/global.json'
import hero from Data.page.homepage.images.intro.src

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <div id="hero">
          <h1>{Data.page.homepage.content.title}</h1>
          <p>{Data.page.homepage.content.intro}</p>
          <button className="small" formAction={Data.page.homepage.links.intro.url} title={Data.page.homepage.links.intro.title}>
            {Data.page.homepage.links.intro.label}
          </button>
          <img src={hero} />
        </div>
        <div id="section2" className="md:flex">
          <div className="section-list  md:w-1/2">
            <img src="../../../assets/images/hp_hero.png" />
            <h3>{Data.page.homepage.content.section2.title}</h3>
            <ol className="list-decimal">
              <li>{Data.page.homepage.content.section2.list1}</li>
              <li>{Data.page.homepage.content.section2.list2}</li>
              <li>{Data.page.homepage.content.section2.list3}</li>
            </ol>
            <button>{Data.page.homepage.links.section2.label}</button>
          </div>
          <div className="section-list md:w-1/2">
            <img src="../${Data.page.homepage.images.section2.src}" />
            <h3 className="border-transparent border-b-4">{Data.page.homepage.content.section3.title}</h3>
            <ol>
              <li>{Data.page.homepage.content.section3.list1}</li>
              <li>{Data.page.homepage.content.section3.list2}</li>
              <li>{Data.page.homepage.content.section3.list3}</li>
            </ol>
            <button>{Data.page.homepage.links.section3.label}</button>
          </div>
        </div>

        <button onClick="/test">TEST</button>
      </div>
    )
  }
}
