/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Navigation from './Navigation';
import { DrawerProvider } from './Drawer/DrawerContext';
import Data from '../data/global.json';
import logoLight from '../assets/images/logo_light.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="px-6">
        <div className="border-celeste border-t-8 md:flex md:flex-wrap">
          <div>
            <img alt="Harta Serviciilor Sociale Logo" src={logoLight} className="pt-8" />
            <p className="text-snow text-xl pb-32 pt-8">
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
            <Navigation navClass="footer-nav hidden sm:block" nav={Data.page} drawer={false} />
          </DrawerProvider>

          <p className="border-brown border-t-2 text-center text-lightbrown py-2 md:w-full">
            {Data.footer.texts.copyright}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    );
  }
}
