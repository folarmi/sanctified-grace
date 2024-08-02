// ToggleSwitch.js
import React from "react";
import { Pressable, Animated } from "react-native";

const CustomSwitchButton = ({ isOn, toggleSwitch }: any) => {
  return (
    <Pressable
      onPress={toggleSwitch}
      className={`w-12 h-6 flex items-center rounded-full p-1 ${
        isOn ? "bg-blue-500" : "bg-blue_300"
      }`}
    >
      <Animated.View
        className={`w-4 h-4 rounded-full bg-white shadow-md transform ${
          isOn ? "translate-x-1" : "translate-x-0"
        }`}
      />
    </Pressable>
  );
};

export default CustomSwitchButton;
