import Data from '../../../../data/global.json';
import hero from '../../../../assets/images/hp_hero.png';
import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <div id="hero" className="section border-celeste border-b-8 mb-20">
        <div className="interior md:flex">
          <div className="md:w-1/3">
            <h1 className="py-4">{Data.page.homepage.content.title}</h1>
            <p className="pb-4">{Data.page.homepage.content.intro}</p>
            <button
              className="small mb-4"
              formAction={Data.page.homepage.links.intro.url}
              title={Data.page.homepage.links.intro.title}>
              {Data.page.homepage.links.intro.label}
            </button>
          </div>
          <div className="md:w-2/3">
            <img src={hero} />
            <input
              id="search"
              className="border-burg border-8 rounded-full background-white absolute -mt-24 pl-10 mx-8 w-4/5 md:w-1/5"
              placeholder="Caută"
            />
          </div>
        </div>
      </div>
    );
  }
}
