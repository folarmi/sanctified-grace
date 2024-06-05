import { Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import ResourcesHeader from "@/components/ResourcesHeader";
import TailwindText from "@/components/TailwindText";

export default function todayDevotional() {
  return (
    <Header>
      <ResourcesHeader text="Today’s Devotional" />

      <View className="bg-primary">
        <TailwindText
          variant="footer"
          className="text-white text-center pt-8 pb-1"
        >
          May 24, 2024
        </TailwindText>
        <TailwindText
          variant="subHeading1"
          className="text-white text-center pb-[30px]"
        >
          Worldly Ease and Prosperity
        </TailwindText>
        <Text className="text-white italic text-sm font-Georgia text-center pb-3">
          Proverbs 30:8-9
        </Text>

        <View className="flex flex-row w-full items-center justify-center">
          <Text className="text-white italic text-sm font-Georgia text-center pb-[30px] w-[289px]">
            "Give me neither poverty nor riches. Feed me with food convenient
            for me; lest I be full, and deny thee, and say: Who is the LORD?
          </Text>
        </View>

        <View className="flex justify-center items-center">
          <View className="bg-white w-[223px] mb-[30px] h-1"></View>
        </View>

        <TailwindText
          variant="bodyText6"
          className="text-white leading-7 text-justify px-6"
        >
          "How plainly I see that worldly ease and prosperity do not help the
          children of God. Covet them not, I beseech you! How the creature
          steals the heart's best affections from God! But oh of this one thing
          I am assured -- that when that is the case, our good and wise Father
          knows how to deal with His beloved children. He breaks their cisterns
          and destroys their gourds. What a snare, too, to the believer, is the
          society of the ungodly. Our nature is so much more inclined to evil
          than to good, that we insensibly imbibe the poison, and it
          contaminates our whole spiritual being. Who could be enclosed in a
          sepulcher with a putrid corpse--and not feel his health and strength
          and life decline? May the Lord in mercy preserve us. *None but God
          Himself is a satisfying Portion. Earth, with all its promised
          comforts, cannot do it. Therefore the Apostle exhorts, "Let your
          conversation be without covetousness; and be content with such things
          as ye have; for he hath said: I will Never leave thee; nor forsake
          thee." ~ Hebrews 13:5
        </TailwindText>
      </View>
    </Header>
  );
}
