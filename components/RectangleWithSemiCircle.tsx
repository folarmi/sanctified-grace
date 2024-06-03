import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

const RectangleWithSemiCircle = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const controlPointY = screenHeight / 2.8; // Adjust this value to control the curvature of the arc

  return (
    <View style={styles.container}>
      <Svg height={screenHeight} width={screenWidth}>
        <Path
          d={`M0,${screenHeight / 3} Q${
            screenWidth / 2
          },${controlPointY} ${screenWidth}, ${
            screenHeight / 3
          } L${screenWidth},${screenHeight} L0,${screenHeight} Z`}
          // fill="#fff"
          fill="red"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RectangleWithSemiCircle;
