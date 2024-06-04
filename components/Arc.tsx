import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { screenWidth } from "@/utils";

export default function Arc() {
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
        fill="white"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
