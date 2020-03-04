import React from 'react';
import Navigation from './Navigation';
import { DrawerProvider } from './Drawer/DrawerContext';
import Data from '../data/global.json';
import { Link } from 'gatsby';
import Logo from '../assets/images/logo.svg';
import Logo_white from '../assets/images/logo_notypewhite.svg';
import { useWindowSize } from '../hooks/useWindowSize';
import Separator from './Separator';

type Props = {
  mapHeader?: boolean;
};

export function Header({ mapHeader }: Props) {
  const windowSize = useWindowSize();

  return (
    <header className={mapHeader ? 'page-harta' : ''}>
      <Separator classSeparator="hidden md:block" color="snow" />
      <div className="interior">
        <Link to="/" title="Back to Homepage">
          {mapHeader && windowSize.width && windowSize.width < 768 ? (
            <img src={Logo_white} alt="Logo" className="mobile-map-logo" />
          ) : (
            <img src={Logo} alt="Logo" />
          )}
        </Link>
        <DrawerProvider>
          <Navigation navClass="nav-header" nav={Data.page} drawer={true} />
        </DrawerProvider>
      </div>
      {mapHeader ? '' : <Separator classSeparator="md:hidden" color="burg" width="88vw" />}
    </header>
  );
}
export default Header;
