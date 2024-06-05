import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import logo from "@/assets/images/logo.png";
import searchIcon from "@/assets/images/searchIcon.png";
import defaultAvatar from "@/assets/images/defaultAvatar.png";
import { Link } from "expo-router";
import { screenHeight } from "@/utils";

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
        <View className="flex flex-row justify-between items-center mt-8">
          <Image source={logo} className="w-[89px] h-9" />

          <View className="flex flex-row items-center">
            <Image source={searchIcon} className="w-11 h-11 mr-3" />

            <Link href="settings">
              <View className="w-full">
                <Image source={defaultAvatar} className="w-11 h-11" />
              </View>
            </Link>
          </View>
        </View>
      </View>
      <ScrollView className={`pt-20 pb-4 h-[${screenHeight}] ${className}`}>
        {children}
      </ScrollView>
    </View>
  );
}
