import { Image, Text, View } from "react-native";
import React, { useContext } from "react";
import Header from "@/components/Header";
import TailwindText from "@/components/TailwindText";
import { resourcesPage } from "@/data";
import { screenWidth } from "@/utils";
import { Link } from "expo-router";
import ThemeContext from "@/app/context/ThemeContext";
import { CustomColor } from "@/components/CustomColor";

export default function resources() {
  const { isDarkMode } = useContext<any>(ThemeContext);

  return (
    <Header>
      <View className="bg-white dark:bg-black">
        <TailwindText variant="subHeading1" className="py-3 text-center">
          Resources
        </TailwindText>
      </View>

      <View className="bg-ash_200 dark:bg-black py-5">
        {resourcesPage?.map(({ id, name, image, link }) => {
          return (
            <View key={id} className="flex flex-row ml-[22px] mb-3">
              <View>
                <Image
                  source={image}
                  className="w-[93px] h-[93px] rounded-tl-xl rounded-bl-xl"
                />
              </View>

              <Link
                href={link}
                style={{
                  elevation: 20,
                  backgroundColor: isDarkMode
                    ? CustomColor.dark_mode
                    : CustomColor.white,
                  width: screenWidth - 140,
                }}
                className={`flex justify-center items-center pl-6 rounded-tr-xl rounded-br-xl bg-white mr-[22px]`}
              >
                <View className="py-9">
                  <TailwindText variant="bodyText1" className="text-primary">
                    {name}
                  </TailwindText>
                </View>
              </Link>
            </View>
          );
        })}
      </View>
    </Header>
  );
}
