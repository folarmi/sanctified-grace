import { Image, ScrollView, View } from "react-native";
import React, { useContext } from "react";
import logo from "@/assets/images/logo.png";
import searchIcon from "@/assets/images/searchIcon.png";
import defaultAvatar from "@/assets/images/defaultAvatar.png";
import { Link } from "expo-router";
import { AppContext } from "@/context/AppContext";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children }: HeaderProps) {
  const { userInfo } = useContext(AppContext);

  return (
    <View className="flex flex-col h-full">
      <View className="relative z-10 py-4 px-6 bg-white dark:bg-black border-b border-gray-200 dark:border-ash_600">
        <View className="w-full flex flex-row justify-between items-center">
          <Image source={logo} className="w-24 h-9" />
          {/* Adjusted logo size */}
          <View className="flex flex-row items-center">
            <Image source={searchIcon} className="w-11 h-11 mr-3" />
            <Link href="/settings">
              <View>
                <Image source={defaultAvatar} className="w-11 h-11" />
              </View>
            </Link>
          </View>
        </View>
      </View>

      <ScrollView className={`pb-4 flex-grow`}>
        {/* Adjusted pt and pb */}
        {children}
      </ScrollView>
    </View>
  );
}
