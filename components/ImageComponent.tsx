import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface ImageComponentProps {
  source: ImageSourcePropType;
  width: number;
  height: number;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  source,
  width,
  height,
}) => {
  return (
    <View style={[styles.container, { width, height }]}>
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageComponent;
