// import React, { useState, useEffect, ReactNode } from "react";
// import ThemeContext, { ThemeContextType } from "./ThemeContext";
// import { Appearance } from "react-native";
// import { useColorScheme } from "nativewind";

// type Props = {
//   children: ReactNode;
// };

// const ThemeProvider = ({ children }: Props) => {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const { colorScheme, toggleColorScheme } = useColorScheme();

//   useEffect(() => {
//     const colorScheme = Appearance.getColorScheme();
//     setIsDarkMode(colorScheme === "dark");
//   }, []);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//     toggleColorScheme();
//   };

//   const contextValue: ThemeContextType = {
//     isDarkMode,
//     toggleTheme,
//   };

//   return (
//     <ThemeContext.Provider value={contextValue}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;

import React, { useState, useEffect, ReactNode, useCallback } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";
import { Appearance } from "react-native";
import { useColorScheme } from "nativewind";

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  useEffect(() => {
    const systemColorScheme = Appearance.getColorScheme();
    setIsDarkMode(systemColorScheme === "dark");
  }, []);

  useEffect(() => {
    setColorScheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode, setColorScheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

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
