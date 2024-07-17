import { Image, Text, TouchableOpacity, View } from "react-native";
import leftArrow from "@/assets/images/leftArrow.png";
import React from "react";
import { useRouter } from "expo-router";

interface ResourcesHeaderProps {
  text: string;
}

export default function ResourcesHeader({ text }: ResourcesHeaderProps) {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <TouchableOpacity
      onPress={() => handleGoBack()}
      className="flex flex-row items-center py-4 bg-ash_400  border-b border-ash_200"
    >
      <Image source={leftArrow} className="w-11 h-11 ml-5 mr-2" />
      <Text className="text-xl text-dark_blue font-MontserratMedium">
        {text}
      </Text>
    </TouchableOpacity>
  );
}
