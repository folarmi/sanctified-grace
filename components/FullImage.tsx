import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";
import { screenWidth } from "@/utils";

interface FullImageProps {
  source: ImageSourcePropType | undefined;
  className?: string;
  height: number;
  width: number;
  borderRadius?: number;
}

export default function FullImage({
  source,
  height,
  width,
  className,
  borderRadius,
}: FullImageProps) {
  return (
    <View style={{ width: "100%" }} className={className}>
      <Image
        source={source}
        style={{ width, height, borderRadius }}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
