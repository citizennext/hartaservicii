/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';
import Data from '../data/global.json';
import logoLight from '../assets/images/logo_light.svg';
import Navigation from './Navigation';
import { DrawerProvider } from './Drawer/DrawerContext';
import Separator from './Separator';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="px-6">
        <div className="section">
          <div className="interior md:flex md:flex-wrap md:justify-between xl:max-w-grid xl:m-auto xl:justify-around">
            {/*@todo Seco -> it must be declare to Separator parameters*/}
            <Separator color="celeste" />
            <div className="mt-8 md:mt-12">
              <Link to="/">
                <img alt="Harta Serviciilor Sociale Logo" src={logoLight} />
              </Link>
              <p className="text-snow text-xl pb-32 pt-8 xl:pt-0">
                este un proiect realizat de{' '}
                <a title={Data.footer.links.asociatia.title} href={Data.footer.links.asociatia.url}>
                  {Data.footer.links.asociatia.text}
                </a>{' '}
                cu <br className="hidden sm:block" />
                sprijinul <a href="https://www.omvpetrom.com/ro">OMV Petrom</a> prin programul{' '}
                <a title="Țara lui Andrei" href="https://taraluiandrei.ro/">
                  Țara lui Andrei
                </a>
                .
              </p>
            </div>
            <DrawerProvider>
              <Navigation navClass="footer-nav hidden sm:block xl:content-end md:mt-12" nav={Data.page} drawer={false} />
            </DrawerProvider>
            <p className="border-brown border-t-2 text-center text-lightbrown py-2 md:w-full">
              {Data.footer.texts.copyright}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
