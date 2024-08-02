import { Text, View } from "react-native";
import React, { useContext } from "react";
import Header from "@/components/Header";
import SettingsHeader from "@/components/SettingsHeader";
import { savedSermonsData } from "@/data";
import TailwindText from "@/components/TailwindText";
import { screenHeight } from "@/utils";
import { CustomColor } from "@/components/CustomColor";
import ThemeContext from "@/app/context/ThemeContext";

export default function savedSermons() {
  const { isDarkMode } = useContext<any>(ThemeContext);

  return (
    <Header className="bg-white">
      <SettingsHeader text="Saved Sermons" />
      <View
        className="h-full"
        style={{
          height: screenHeight,
          backgroundColor: isDarkMode
            ? CustomColor.dark_mode
            : CustomColor?.white,
        }}
      >
        {savedSermonsData.map(
          ({ bibleVerse, date, id, month, preacher, title }) => {
            return (
              <View
                key={id}
                className="flex flex-row items-center px-7 py-4 border-b border-ash_200 dark:border-ash_600 dark:bg-dark_mode"
              >
                <View className="mr-6">
                  <TailwindText variant="bodyText3">{month}</TailwindText>
                  <Text className="text-[40px] dark:text-white font-MontserratLight">
                    {date}
                  </Text>
                </View>

                <View>
                  <TailwindText variant="bodyText1" className="pb-2">
                    {title}
                  </TailwindText>
                  <View className="flex flex-row items-center">
                    <TailwindText variant="footer" className="pr-2">
                      {bibleVerse}
                    </TailwindText>
                    <View className="h-3 w-[1px] bg-orange_100"></View>
                    <TailwindText variant="footer" className="pl-2">
                      {preacher}
                    </TailwindText>
                  </View>
                </View>
              </View>
            );
          }
        )}
      </View>
    </Header>
  );
}
