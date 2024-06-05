import { Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import SettingsHeader from "@/components/SettingsHeader";
import { inboxData } from "@/data";
import TailwindText from "@/components/TailwindText";

export default function inbox() {
  return (
    <Header className="bg-white">
      <SettingsHeader text="Inbox" />

      {inboxData.map(({ body, date, id, topic }) => {
        return (
          <View key={id} className="py-3 border border-b border-ash_200 px-6">
            <View className="flex flex-row justify-between mb-1">
              <TailwindText variant="footer" className="text-blue_100">
                {topic}
              </TailwindText>

              <TailwindText variant="footer" className="text-blue_100">
                {date}
              </TailwindText>
            </View>

            <TailwindText variant="footer" className="">
              {body}
            </TailwindText>
          </View>
        );
      })}
    </Header>
  );
}
