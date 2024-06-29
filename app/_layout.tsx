import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "../global.css";
import QueryClientContextProvider from "./lib/QueryClientContextProvider";
import { ToastProvider } from "react-native-toast-notifications";
import { AppProvider } from "@/context/AppContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Georgia: require("../assets/fonts/Georgia.ttf"),
    GeorgiaBold: require("../assets/fonts/georgiab.ttf"),
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DefaultTheme : DefaultTheme}>
      <AppProvider>
        <QueryClientContextProvider>
          <ToastProvider>
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="signup" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ToastProvider>
        </QueryClientContextProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
