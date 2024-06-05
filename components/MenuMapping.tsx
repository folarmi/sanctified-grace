import { Image, Text, View } from "react-native";
import React from "react";
import TailwindText from "./TailwindText";
import nextArrow from "@/assets/images/nextArrow.png";
import { Link } from "expo-router";

export default function MenuMapping({ items }: any) {
  return (
    <View>
      {items?.map(({ id, name, sub, image, link }: any) => {
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

            <Link href={`/settings/${link}`} className="ml-auto">
              <Image source={nextArrow} className="w-6 h-6" />
            </Link>
          </View>
        );
      })}
    </View>
  );
}
