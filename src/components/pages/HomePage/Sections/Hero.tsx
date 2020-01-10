import Data from '../../../../data/global.json';
import herod from '../../../../assets/images/HSS_people_clean_2000.png';
import React from 'react';
import Separator from '../../../Separator';

function Hero() {
  return (
    <div id="hero" className="section mb-20">
      <div className="interior md:flex md:max-w-gridt xl:max-w-griddw xl:m-auto xl:justify-between">
        <div className="md:w-1/3 xl:w-1/4">
          <h1 className="py-4">{Data.page.homepage.content.title}</h1>
          <p className="pb-4">{Data.page.homepage.content.intro}</p>
          <button
            className="small mb-4"
            formAction={Data.page.homepage.links.intro.url}
            title={Data.page.homepage.links.intro.title}>
            {Data.page.homepage.links.intro.label}
          </button>
        </div>
        <div className="md:w-2/3 xl:w-3/4 xl:self-end">
          <img src={herod} className="wide md:-wide xl:self-end" />
          <div className="search-icon">
            <input
              id="search"
              className="border-burg border-8 rounded-full background-white absolute -mt-24 pl-10"
              placeholder="Caută serviciu, zonă sau tipologie beneficiar"
            />
          </div>
        </div>
        <Separator color="celeste" bottom="-6px" />
      </div>
    </div>
  );
}

export default Hero;
