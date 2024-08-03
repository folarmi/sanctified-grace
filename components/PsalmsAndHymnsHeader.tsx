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
    <View className="w-full flex flex-row items-center justify-between bg-white dark:bg-black p-4 border-b border-gray-200 dark:border-ash_600 pt-8">
      <View className="flex flex-row items-center">
        <TouchableOpacity onPress={() => handleGoBack()}>
          <Image source={leftArrow} className="w-6 h-6 mr-3" />
        </TouchableOpacity>
        <TailwindText variant="subHeading1">Psalms & Hymns</TailwindText>
      </View>
      <View className="">
        <Image source={defaultAvatar} className="w-11 h-11" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
