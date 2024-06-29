// AppContext.js
import React, { ReactNode, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AppContextType {
  isFullPlayer: boolean;
  setIsFullPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: any;
}

const defaultState: AppContextType = {
  isFullPlayer: false,
  setIsFullPlayer: () => {},
  userInfo: {},
};

export const AppContext = createContext<AppContextType>(defaultState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isFullPlayer, setIsFullPlayer] = useState(false);
  const [userInfo, setUserInfo] = useState<any>({});

  const getUserObject = async () => {
    try {
      const jsonValue: any = await AsyncStorage.getItem("userObject");
      setUserInfo(JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
    }
  };

  useEffect(() => {
    getUserObject();

    return () => {};
  }, []);

  return (
    <AppContext.Provider value={{ isFullPlayer, setIsFullPlayer, userInfo }}>
      {children}
    </AppContext.Provider>
  );
};
