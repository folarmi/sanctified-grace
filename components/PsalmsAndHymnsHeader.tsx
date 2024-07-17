import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import TailwindText from "./TailwindText";
import defaultAvatar from "@/assets/images/defaultAvatar.png";
import leftArrow from "@/assets/images/leftArrow.png";
import { useRouter } from "expo-router";

export default function PsalmsAndHymnsHeader() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <View className="w-full flex flex-row items-center justify-between bg-white p-4 border-b border-gray-200">
      <TouchableOpacity onPress={() => handleGoBack()}>
        <Image source={leftArrow} className="w-6 h-6 mr-3" />
      </TouchableOpacity>
      <TailwindText variant="subHeading1">Psalms & Hymns</TailwindText>
      <View className="w-full ml-8">
        <Image source={defaultAvatar} className="w-11 h-11" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
