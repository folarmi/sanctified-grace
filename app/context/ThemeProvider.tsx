import React, { useState, useEffect, ReactNode } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";
import { Appearance } from "react-native";
import { useColorScheme } from "nativewind";

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [, setIsDarkMode] = useState(false);
  const { colorScheme: isDarkMode, toggleColorScheme } = useColorScheme();

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    setIsDarkMode(colorScheme === "dark");
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const contextValue: ThemeContextType = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
