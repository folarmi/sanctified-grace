import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import blackArrow from "@/assets/images/blackArrow.png";
import bookOne from "@/assets/images/bookOne.png";
import TailwindText from "@/components/TailwindText";
import { useRouter } from "expo-router";

export default function bookSummary() {
  const router = useRouter();
  return (
    <View className="">
      <View className="bg-ash_300 dark:bg-dark_mode">
        <View className="mt-12 border-b border-ash_200 dark:border-ash_600">
          <Pressable onPress={router.back} className="ml-5">
            <Image source={blackArrow} className="w-11 h-11" />
          </Pressable>
        </View>

        <View className="flex items-center justify-center my-8">
          <Image source={bookOne} className="w-[144px] h-[232px]" />
        </View>
      </View>

      <View className="px-5 bg-white dark:bg-dark_mode py-5 border-b border-ash_200">
        <TailwindText variant="headingOne" className="w-[341px]">
          Directions for Daily Communion with God
        </TailwindText>

        <View className="flex flex-row items-center justify-between pt-2">
          <TailwindText variant="bodyText2">Matthew Henry</TailwindText>
          <TailwindText variant="bodyText5">N750</TailwindText>
        </View>
      </View>

      <View className="bg-white px-5">
        <TailwindText variant="bodyText5" className="py-7 leading-7">
          "Directions for Daily Communion with God" by Matthew Henry is a
          devotional book that guides Christians on how to effectively engage
          with God throughout each part of the day: morning, afternoon, and
          evening. Each section is crafted to help believers focus their heart
          and mind on God during these specific times
        </TailwindText>

        <TailwindText variant="bodyText5" className="py-7 leading-7">
          Throughout the book, Henry underscores the necessity of continuous and
          conscious
        </TailwindText>
      </View>
    </View>
  );
}
