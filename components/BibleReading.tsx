import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TailwindText from "./TailwindText";
import FullImage from "./FullImage";
import todayBibleReading from "@/assets/images/todayBibleReading.png";
import { screenWidth } from "@/utils";
import ArrowText from "./ArrowText";

export default function BibleReading() {
  return (
    <View className="mt-10 px-6 pb-10 border-b border-ash_200 dark:border-ash_600">
      <TailwindText variant="subHeading1">Today’s Bible Reading</TailwindText>
      <FullImage
        source={todayBibleReading}
        width={screenWidth - 42}
        height={163}
        className="my-4"
      />
      <TailwindText
        variant="bodyTextTwo"
        className="text-base text-justify pb-4"
      >
        Join our Bible reading plan and read the entire Bible in a year. You'll
        cover the Old Testament once and the New Testament and Psalms twice.
        This structured approach not only ensures you experience all of
        Scripture but also saves you time deciding what to read next.
      </TailwindText>

      <ArrowText
        href="resources/todayBibleReading"
        text="Read today’s Passages"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
