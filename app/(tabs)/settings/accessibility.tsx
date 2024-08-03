import Header from "@/components/Header";
import SettingsHeader from "@/components/SettingsHeader";
import TailwindText from "@/components/TailwindText";
import { accessibilityData } from "@/data";
import React, { useContext, useState } from "react";
import { Image, View } from "react-native";
import downArrow from "@/assets/images/downArrow.png";
import CustomSwitchButton from "@/components/CustomSwitchButton";
import ThemeContext from "@/app/context/ThemeContext";
import { screenHeight } from "@/utils";
import { CustomColor } from "@/components/CustomColor";

const Accessibility = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { isDarkMode, toggleTheme } = themeContext;

  console.log(isDarkMode);

  return (
    <Header>
      <SettingsHeader text="Accessibility" />

      <View
        className="h-full"
        style={{
          height: screenHeight,
          backgroundColor: isDarkMode
            ? CustomColor.dark_mode
            : CustomColor?.white,
        }}
      >
        {accessibilityData?.map(({ id, name, action }) => {
          return (
            <View
              key={id}
              className="flex flex-row items-center justify-between px-6 pt-3 pb-[22px] border-b border-ash_500 dark:border-ash_600"
            >
              <View className="">
                <TailwindText variant="footer" className="pb-2 text-blue_100">
                  {name}
                </TailwindText>
                <TailwindText variant="bodyText1">{action}</TailwindText>
              </View>

              {name !== "Theme" && name !== "Display" && (
                <Image source={downArrow} className="w-6 h-6" />
              )}

              {name === "Theme" && (
                <CustomSwitchButton
                  isOn={isDarkMode}
                  toggleSwitch={toggleTheme}
                />
              )}
            </View>
          );
        })}
      </View>
    </Header>
  );
};

export default Accessibility;
