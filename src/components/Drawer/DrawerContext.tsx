import React, { useState } from 'react';

export const DrawerContext = React.createContext(false);

export const DrawerProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useState(false);
  return <DrawerContext.Provider value={{ state, dispatch }}>{children}</DrawerContext.Provider>;
};
