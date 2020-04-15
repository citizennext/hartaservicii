import React from 'react';
import Data from '../data/global.json';
import logoLight from '../assets/images/logo_light.svg';
import Navigation from './Navigation';
import Separator from './Separator';
import { Link } from 'gatsby';

export function Footer() {
  return (
    <footer className="px-6">
      <div className="section">
        <div className="interior md:flex md:flex-wrap md:justify-between xl:max-w-gridd xl:m-auto xl:justify-around">
          <Separator color="celeste" />
          <div className="pt-8 md:pt-0 mt-8 md:mt-12">
            <Link to="/">
              <img alt="Harta Serviciilor Sociale Logo" src={logoLight} />
            </Link>
            <p className="text-snow text-xl pb-32 pt-8 xl:pt-0">
              este un proiect realizat de{' '}
              <a
                title={Data.footer.links.asociatia.title}
                href={Data.footer.links.asociatia.url}
                target="_blank"
                rel="noreferrer noopener">
                {Data.footer.links.asociatia.text}
              </a>{' '}
              și{' '}
              <a
                title="Social Innovation Solutions"
                href="https://www.socialinnovationsolutions.org"
                target="_blank"
                rel="noreferrer noopener">
                Social Innovation Solutions
              </a>{' '}
              cu <br className="hidden sm:block" />
              sprijinul {' '}
              <a title="RO SMART în Țara lui Andrei" href="https://taraluiandrei.ro/" target="_blank" rel="noreferrer noopener">
                RO SMART în Țara lui Andrei
              </a>{' '}
              un program{' '}
              <a href="https://www.omvpetrom.com/ro" title="Omv Petrom" target="_blank" rel="noreferrer noopener">
                OMV Petrom
              </a>
              .
            </p>
          </div>
          <Navigation drawer={false} navClass="footer-nav hidden sm:block xl:content-end md:mt-12" nav={Data.page} />
          <p className="text-copyright border-brown border-t-2 text-center text-lightbrown py-2 md:w-full">
            {Data.footer.texts.copyright}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
