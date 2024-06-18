import React from "react";
import { View, Text } from "react-native";

const ProgressBar = ({ progress }: any) => {
  return (
    <View className="h-1 bg-red-900 rounded-full overflow-hidden">
      <View
        style={{
          width: `${progress}%`,
          backgroundColor: "blue", // Adjust color as needed
          height: "100%",
          borderRadius: 32, // Use a large number to ensure it's fully rounded
        }}
      />
    </View>
  );
};

export default ProgressBar;
