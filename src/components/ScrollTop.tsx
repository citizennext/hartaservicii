import React from 'react';

export const ScrollTop = ({ children, location }: { children: any; location?: Location; path: string }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location?.pathname]);
  return children;
};
