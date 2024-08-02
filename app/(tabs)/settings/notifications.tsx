import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Header from "@/components/Header";
import SettingsHeader from "@/components/SettingsHeader";
import { notificationData } from "@/data";
import TailwindText from "@/components/TailwindText";
import { screenHeight } from "@/utils";
import { CustomColor } from "@/components/CustomColor";
import ThemeContext from "@/app/context/ThemeContext";

export default function notifications() {
  const { isDarkMode } = useContext<any>(ThemeContext);

  return (
    <Header className="bg-white">
      <SettingsHeader text="Notifications" />

      <View
        className="h-full"
        style={{
          height: screenHeight,
          backgroundColor: isDarkMode
            ? CustomColor.dark_mode
            : CustomColor?.white,
        }}
      >
        {notificationData.map(({ id, name, topic }) => {
          return (
            <View key={id} className="border-b border-ash_200 px-6 py-4">
              <TailwindText variant="footer" className="text-blue_100">
                {name}
              </TailwindText>
              <TailwindText variant="bodyText1">{topic}</TailwindText>
            </View>
          );
        })}
      </View>
    </Header>
  );
}
