import { Image, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import SettingsHeader from "@/components/SettingsHeader";
import { appSettings, moreItems, thisDevice, userProfile } from "@/data";
import TailwindText from "@/components/TailwindText";
import pencil from "@/assets/images/pencil.png";
import nextArrow from "@/assets/images/nextArrow.png";

export default function index() {
  return (
    <Header>
      <SettingsHeader text="Account Settings" />

      <View className="bg-white">
        <Text className="text-[18px] font-GeorgiaBold pt-6 pl-4">
          User Profile
        </Text>

        {userProfile?.map(({ id, name, sub }) => {
          return (
            <View
              key={id}
              className="flex items-center flex-row px-7 py-4 border-b border-ash_200"
            >
              <View className="w-11 h-11 bg-sky_blue flex items-center p-[10px] rounded-full mr-[33px]">
                <TailwindText variant="bodyText1" className="text-black">
                  EU
                </TailwindText>
              </View>

              <View>
                <TailwindText variant="bodyText1" className="pb-1">
                  {name}
                </TailwindText>
                <TailwindText variant="footer">{sub}</TailwindText>
              </View>

              <View className="ml-auto">
                <Image source={pencil} className="w-6 h-6" />
              </View>
            </View>
          );
        })}

        {/* This Device */}
        <Text className="text-[18px] font-GeorgiaBold pt-6 pl-4">
          This Device
        </Text>

        {thisDevice?.map(({ id, name, sub, image }) => {
          return (
            <View
              key={id}
              className="flex items-center flex-row px-7 py-4 border-b border-ash_200"
            >
              <View className=" mr-[33px]">
                <Image source={image} className="w-11 h-11" />
              </View>

              <View>
                <TailwindText variant="bodyText1" className="pb-1">
                  {name}
                </TailwindText>
                <TailwindText variant="footer">{sub}</TailwindText>
              </View>

              <View className="ml-auto">
                <Image source={nextArrow} className="w-6 h-6" />
              </View>
            </View>
          );
        })}

        {/* App Settings */}
        <Text className="text-[18px] font-GeorgiaBold pt-6 pl-4">
          App Settings
        </Text>

        {appSettings?.map(({ id, name, sub, image }) => {
          return (
            <View
              key={id}
              className="flex items-center flex-row px-7 py-4 border-b border-ash_200"
            >
              <View className=" mr-[33px]">
                <Image source={image} className="w-11 h-11" />
              </View>

              <View>
                <TailwindText variant="bodyText1" className="pb-1">
                  {name}
                </TailwindText>
                <TailwindText variant="footer">{sub}</TailwindText>
              </View>

              <View className="ml-auto">
                <Image source={nextArrow} className="w-6 h-6" />
              </View>
            </View>
          );
        })}

        {/* More items */}
        <Text className="text-[18px] font-GeorgiaBold pt-6 pl-4">More</Text>

        {moreItems?.map(({ id, name, sub, image }) => {
          return (
            <View
              key={id}
              className="flex items-center flex-row px-7 py-4 border-b border-ash_200"
            >
              <View className=" mr-[33px]">
                <Image source={image} className="w-11 h-11" />
              </View>

              <View>
                <TailwindText variant="bodyText1" className="pb-1">
                  {name}
                </TailwindText>
                <TailwindText variant="footer">{sub}</TailwindText>
              </View>

              <View className="ml-auto">
                <Image source={nextArrow} className="w-6 h-6" />
              </View>
            </View>
          );
        })}
      </View>
    </Header>
  );
}
