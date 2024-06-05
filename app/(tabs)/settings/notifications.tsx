import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import SettingsHeader from "@/components/SettingsHeader";
import { notificationData } from "@/data";
import TailwindText from "@/components/TailwindText";

export default function notifications() {
  return (
    <Header className="bg-white">
      <SettingsHeader text="Notifications" />

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
    </Header>
  );
}
