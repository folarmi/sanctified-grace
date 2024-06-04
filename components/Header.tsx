import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import logo from "@/assets/images/logo.png";
import searchIcon from "@/assets/images/searchIcon.png";
import defaultAvatar from "@/assets/images/defaultAvatar.png";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: HeaderProps) {
  return (
    <View className="flex">
      <View
        className={`absolute top-0 left-0 right-0 z-10 py-4 px-6 bg-white border-b border-gray-200`}
      >
        {/* <Text className="text-lg font-bold">Sticky Header</Text> */}
        <View className="flex flex-row justify-between mt-5">
          <Image source={logo} className="w-[89px] h-9" />

          <View className="flex flex-row">
            <Image source={searchIcon} className="w-11 h-11 mr-3" />
            <Image source={defaultAvatar} className="w-11 h-11" />
          </View>
        </View>
      </View>
      <ScrollView className={`pt-20 pb-4 ${className}`}>{children}</ScrollView>
    </View>
  );
}
