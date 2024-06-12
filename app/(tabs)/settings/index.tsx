import { Image, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import SettingsHeader from "@/components/SettingsHeader";
import { appSettings, moreItems, thisDevice, userProfile } from "@/data";
import TailwindText from "@/components/TailwindText";
import pencil from "@/assets/images/pencil.png";
import nextArrow from "@/assets/images/nextArrow.png";
import { Link, useRouter } from "expo-router";
import MenuMapping from "@/components/MenuMapping";
import CustomButton from "@/components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function index() {
  const router = useRouter();
  const logout = async () => {
    try {
      await AsyncStorage.clear();
      router.navigate("");
    } catch (e) {
      // remove error
    }
  };
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

              <Link href="/settings/userProfile" className="ml-auto">
                <Image source={pencil} className="w-6 h-6" />
              </Link>
            </View>
          );
        })}

        {/* This Device */}
        <Text className="text-[18px] font-GeorgiaBold pt-6 pl-4">
          This Device
        </Text>

        <MenuMapping items={thisDevice} />

        {/* App Settings */}
        <Text className="text-[18px] font-GeorgiaBold pt-6 pl-4">
          App Settings
        </Text>
        <MenuMapping items={appSettings} />

        {/* More items */}
        <Text className="text-[18px] font-GeorgiaBold pt-6 pl-4">More</Text>

        <MenuMapping items={moreItems} />

        <View className="my-12">
          <CustomButton
            // onPress={handleSubmit(onSubmit)}
            title="Login"
            onPress={logout}
            // disabled={loginMutation.isPending}
            // isLoading={loginMutation.isPending}
          />
        </View>
      </View>
    </Header>
  );
}
