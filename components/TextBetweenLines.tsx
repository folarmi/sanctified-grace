// TextBetweenLines.tsx
import React from "react";
import { View, Text } from "react-native";

type TextBetweenLinesProps = {
  text: string;
};

const TextBetweenLines: React.FC<TextBetweenLinesProps> = ({ text }) => {
  return (
    <View className="flex-row items-center">
      <View className="flex-1 h-px bg-gray-300" />
      <Text
        className="px-4 font-MontserratLight text-gray-700"
        style={{
          textShadowColor: "rgba(0, 0, 0, 0.25)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,
        }}
      >
        {text}
      </Text>
      <View className="flex-1 h-px bg-gray-300" />
    </View>
  );
};

export default TextBetweenLines;
