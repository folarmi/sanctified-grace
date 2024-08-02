import { Text, View } from "react-native";
import React, { useContext } from "react";
import Header from "@/components/Header";
import SettingsHeader from "@/components/SettingsHeader";
import { inboxData } from "@/data";
import TailwindText from "@/components/TailwindText";
import { screenHeight } from "@/utils";
import ThemeContext from "@/app/context/ThemeContext";
import { CustomColor } from "@/components/CustomColor";

export default function inbox() {
  const { isDarkMode } = useContext<any>(ThemeContext);

  return (
    <Header>
      <SettingsHeader text="Inbox" />
      <View
        className="h-full"
        style={{
          height: screenHeight,
          backgroundColor: isDarkMode
            ? CustomColor.dark_mode
            : CustomColor?.white,
        }}
      >
        {inboxData.map(({ body, date, id, topic }) => {
          return (
            <View
              key={id}
              className="dark:bg-dark_mode py-3 border border-b border-ash_200 dark:border-ash_600 px-6"
            >
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
      </View>
    </Header>
  );
}
