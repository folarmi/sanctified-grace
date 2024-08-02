import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Path, Svg } from "react-native-svg";
import { screenWidth } from "@/utils";
import ThemeContext from "@/app/context/ThemeContext";

export default function Arc() {
  const { isDarkMode } = useContext<any>(ThemeContext);

  return (
    <Svg
      height={100}
      width={screenWidth}
      style={{ position: "absolute", bottom: 0 }}
    >
      <Path
        d={`M0,0 Q${
          screenWidth / 5
        },100 ${screenWidth},0 L${screenWidth},100 L0,100 Z`}
        fill={isDarkMode ? "#202020" : "white"}
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
