/** @jsx jsx */
import { jsx } from '@emotion/core';
import Data from '../data/global.json';
import logoLight from '../assets/images/logo_light.svg';
import Navigation from './Navigation';
import { DrawerProvider } from './Drawer/DrawerContext';

export function Footer() {
  return (
    <footer className="px-6">
      <div className="border-celeste border-t-8 md:flex md:flex-wrap">
        <div>
          <img src={logoLight} />
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
          <Navigation navClass="footer-nav hidden sm:block xl:content-end md:mt-12" nav={Data.page} drawer={false} />
        </DrawerProvider>
        <p className="border-brown border-t-2 text-center text-lightbrown py-2 md:w-full">
          {Data.footer.texts.copyright}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
