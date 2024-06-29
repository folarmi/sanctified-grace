import { View, Text, Image, Touchable, Pressable } from "react-native";
import React from "react";
import ashCircleArrow from "@/assets/images/ashCircleArrow.png";
import { useNavigation, useRouter } from "expo-router";

interface SettingsHeaderProps {
  text: string;
}

export default function SettingsHeader({ text }: SettingsHeaderProps) {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row items-center py-2 bg-white border-b border-ash_200">
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={ashCircleArrow} className="w-11 h-11 ml-5 mr-2" />
      </Pressable>
      <Text className="text-xl text-dark_blue font-MontserratMedium">
        {text}
      </Text>
    </View>
  );
}
