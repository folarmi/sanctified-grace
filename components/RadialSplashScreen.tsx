// components/SplashScreen.js
import React from "react";
import { StyleSheet, Image } from "react-native";
import splashScreen from "@/assets/images/splash.png";
import { screenHeight, screenWidth } from "@/utils";
import RadialGradientBackground from "./RadialBackground";

const RadialSplashScreen = () => {
  return (
    <RadialGradientBackground>
      <Image source={splashScreen} style={styles.logo} />
    </RadialGradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: screenWidth,
    height: screenHeight,
    resizeMode: "contain",
  },
});

export default RadialSplashScreen;
