// AppContext.js
import React, { ReactNode, createContext, useState } from "react";

interface AppContextType {
  isFullPlayer: boolean;
  setIsFullPlayer: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState: AppContextType = {
  isFullPlayer: false,
  setIsFullPlayer: () => {},
};

export const AppContext = createContext<AppContextType>(defaultState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isFullPlayer, setIsFullPlayer] = useState(false);

  return (
    <AppContext.Provider value={{ isFullPlayer, setIsFullPlayer }}>
      {children}
    </AppContext.Provider>
  );
};
