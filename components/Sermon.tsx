import { Text, View } from "react-native";
import React from "react";
import { formatDate } from "@/utils";
import TailwindText from "./TailwindText";

export default function Sermon(item: any) {
  return (
    <View
      key={item?._id}
      className="flex flex-row items-center px-7 py-4 border-b border-ash_200"
    >
      <View className="mr-6">
        <TailwindText variant="bodyText3">
          {formatDate(item?.preacher?.createdAt).month}
        </TailwindText>
        <Text className="text-[40px] font-MontserratLight">
          {formatDate(item?.preacher?.createdAt).day}
        </Text>
      </View>

      <View>
        <TailwindText variant="bodyText1" className="pb-2">
          {item?.title}
        </TailwindText>
        <View className="flex flex-row items-center">
          <TailwindText variant="footer" className="pr-2">
            {`${item?.bookOfBible?.name} ${item?.bookOfBible?.chapter}:${item?.bookOfBible?.verse}`}
          </TailwindText>
          <View className="h-3 w-[1px] bg-orange_100"></View>
          <TailwindText variant="footer" className="pl-2">
            {`${item?.preacher?.first_name}${" "}${item?.preacher?.last_name}`}
          </TailwindText>
        </View>
      </View>
    </View>
  );
}
