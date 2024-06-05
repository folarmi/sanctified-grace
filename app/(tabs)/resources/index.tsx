import { Image, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import TailwindText from "@/components/TailwindText";
import { resourcesPage } from "@/data";
import { screenWidth } from "@/utils";
import { Link } from "expo-router";

export default function resources() {
  return (
    <Header className="bg-white">
      <View className="mt-10">
        <TailwindText variant="subHeading1" className="py-3 text-center">
          Resources
        </TailwindText>
      </View>

      <View className="bg-ash_200 py-5">
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
                  backgroundColor: "#fff",
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
