import { Image, Text, View } from "react-native";
import leftArrow from "@/assets/images/leftArrow.png";
import React from "react";

interface ResourcesHeaderProps {
  text: string;
}

export default function ResourcesHeader({ text }: ResourcesHeaderProps) {
  return (
    <View className="flex flex-row items-center pt-10 pb-5 bg-white border-b border-ash_200">
      <Image source={leftArrow} className="w-11 h-11 ml-5 mr-2" />
      <Text className="text-xl text-dark_blue font-MontserratMedium">
        {text}
      </Text>
    </View>
  );
}
