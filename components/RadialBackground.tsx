import { screenHeight, screenWidth } from "@/utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  Rect,
  LinearGradient,
} from "react-native-svg";

const RadialGradientBackground = ({ children, FROM_COLOR, TO_COLOR }: any) => {
  return (
    <View style={{ flex: 1, height: screenHeight, backgroundColor: "red" }}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="50%"
            r="100%"
            fx="100%"
            fy="100%"
          >
            <Stop offset="0%" stopColor={FROM_COLOR} />
            <Stop offset="100%" stopColor={TO_COLOR} />
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {children}
    </View>
  );
};

export default RadialGradientBackground;
