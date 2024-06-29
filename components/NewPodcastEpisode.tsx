import { Image, View } from "react-native";
import React from "react";
import TailwindText from "./TailwindText";
import newPodCastEpisode from "@/assets/images/newPodCastEpisode.png";
import { screenWidth } from "@/utils";
import ArrowText from "./ArrowText";

export default function NewPodcastEpisode() {
  return (
    <View className="mt-10 px-6 pb-10 border-b border-ash_200">
      <TailwindText variant="subHeading1">New Podcast Episode</TailwindText>

      <View style={{ width: "100%" }}>
        <Image
          source={newPodCastEpisode}
          style={{ width: screenWidth - 42, height: 175 }}
          resizeMode="cover"
          className="mt-4 rounded-t-2xl"
        />
      </View>

      <View
        style={{
          elevation: 20,
          shadowColor: "#000",
        }}
        className="shadow-2xl bg-white rounded-b-2xl px-4"
      >
        <TailwindText variant="bodyText1" className="pt-3">
          The Trinity & Man’s Salvation
        </TailwindText>
        <TailwindText
          variant="bodyTextTwo"
          className=" leading-6 text-justify pb-6"
        >
          This week, Pastor Osagie dives into the mystery of the Trinity, and
          how it pertains to the Gospel, the salvation of mankind. How Important
          is this subject? find out!
        </TailwindText>
      </View>

      <ArrowText href="podcasts" text="View Older Podcasts" className="mt-8" />
    </View>
  );
}
