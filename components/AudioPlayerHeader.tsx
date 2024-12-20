import { Image, StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import logo from "@/assets/images/logo.png";
import searchIcon from "@/assets/images/searchIcon.png";
import defaultAvatar from "@/assets/images/defaultAvatar.png";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function AudioPlayerHeader() {
  const { isFullPlayer } = useContext(AppContext);
  return (
    <>
      {!isFullPlayer && (
        <View className="relative z-10 py-4 px-6 bg-white dark:bg-black border-b border-gray-200 dark:border-ash_600">
          <View className="flex flex-row justify-between items-center mt-8">
            <Image source={logo} className="w-24 h-9" />
            {/* Adjusted logo size */}
            <View className="flex flex-row items-center">
              <Image source={searchIcon} className="w-11 h-11 mr-3" />
              <Link href="settings">
                <View>
                  <Image source={defaultAvatar} className="w-11 h-11" />
                </View>
              </Link>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
