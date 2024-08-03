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
import { Appearance, ColorSchemeName } from "react-native";
import { useColorScheme } from "nativewind";

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const { setColorScheme } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(
    Appearance.getColorScheme() === "dark"
  );

  const handleAppearanceChange = useCallback(
    (preferences: { colorScheme: ColorSchemeName }) => {
      const { colorScheme } = preferences;
      if (colorScheme === "dark" || colorScheme === "light") {
        setIsDarkMode(colorScheme === "dark");
        setColorScheme(colorScheme); // Synchronize nativewind colorScheme
      }
    },
    [setColorScheme]
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(handleAppearanceChange);

    return () => subscription.remove();
  }, [handleAppearanceChange]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      setColorScheme(newMode ? "dark" : "light"); // Synchronize nativewind colorScheme
      return newMode;
    });
  }, [setColorScheme]);

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
