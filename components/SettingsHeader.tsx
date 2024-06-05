import { View, Text, Image, Touchable } from "react-native";
import React from "react";
import ashCircleArrow from "@/assets/images/ashCircleArrow.png";
import { useRouter } from "expo-router";

interface SettingsHeaderProps {
  text: string;
}

export default function SettingsHeader({ text }: SettingsHeaderProps) {
  const router = useRouter();

  return (
    <View className="flex flex-row items-center pt-10 pb-5 bg-white border-b border-ash_200">
      <Image source={ashCircleArrow} className="w-11 h-11 ml-5 mr-2" />
      <Text className="text-xl text-dark_blue font-MontserratMedium">
        {text}
      </Text>
    </View>
  );
}
