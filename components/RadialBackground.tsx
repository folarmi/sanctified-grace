import { screenHeight, screenWidth } from "@/utils";
import React from "react";
import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";

const RadialGradientBackground = ({ style }: any) => {
  return (
    <Svg
      height={screenHeight}
      width={screenWidth}
      style={style}
      viewBox={`0 0 ${screenWidth} ${screenHeight}`}
    >
      <Defs>
        <RadialGradient id="grad" cx="50%" cy="0%" r="75%" fx="50%" fy="0%">
          <Stop offset="0%" stopColor="#084298" stopOpacity="1" />
          <Stop offset="100%" stopColor="#011f4b" stopOpacity="1" />
        </RadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
};

export default RadialGradientBackground;
