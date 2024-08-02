import Header from "@/components/Header";
import SettingsHeader from "@/components/SettingsHeader";
import TailwindText from "@/components/TailwindText";
import { accessibilityData } from "@/data";
import React, { useState } from "react";
import { Image, View } from "react-native";
import downArrow from "@/assets/images/downArrow.png";
import CustomSwitchButton from "@/components/CustomSwitchButton";

const Accessibility = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((previousState) => !previousState);
  };

  return (
    <Header className="bg-white">
      <SettingsHeader text="Accessibility" />

      <View className=" bg-white">
        {accessibilityData?.map(({ id, name, action }) => {
          return (
            <View
              key={id}
              className="flex flex-row items-center justify-between px-6 pt-3 pb-[22px] border-b border-ash_500"
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
                <CustomSwitchButton isOn={isOn} toggleSwitch={toggleSwitch} />
              )}
            </View>
          );
        })}
      </View>
    </Header>
  );
};

export default Accessibility;
