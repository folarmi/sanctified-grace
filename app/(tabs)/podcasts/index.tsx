// import { Text, View } from "react-native";
import React, { useContext, useState } from "react";
import FullImage from "@/components/FullImage";
import { screenWidth } from "@/utils";
import Header from "@/components/Header";
import podcasts from "@/assets/images/podcasts.png";
import { Image, ScrollView, View } from "react-native";
import { podcastData } from "@/data";
import { Link } from "expo-router";
import TailwindText from "@/components/TailwindText";
import AudioPlayerHeader from "@/components/AudioPlayerHeader";
import PodcastAudioPlayer from "@/components/PodcastAudioPlayer";
import ThemeContext from "@/app/context/ThemeContext";
import { CustomColor } from "@/components/CustomColor";

export default function index() {
  const [isFullPlayer, setIsFullPlayer] = useState(false);
  const { isDarkMode } = useContext<any>(ThemeContext);
  return (
    <>
      <AudioPlayerHeader />
      <ScrollView>
        {!isFullPlayer && (
          <FullImage width={screenWidth} source={podcasts} height={170} />
        )}

        <View className="bg-ash_200 dark:bg-black py-8">
          {podcastData?.map(({ id, title, summary, img, link }) => {
            return (
              <View key={id} className="flex flex-row ml-[22px] mb-[18px]">
                <View>
                  <Image
                    source={img}
                    className="w-[114px] h-[114px] rounded-tl-xl rounded-bl-xl"
                  />
                </View>

                <Link
                  href={link}
                  style={{
                    elevation: 20,
                    backgroundColor: isDarkMode
                      ? CustomColor.dark_mode
                      : CustomColor?.white,
                    width: screenWidth - 160,
                  }}
                  className={`flex justify-center items-center pl-6 rounded-tr-xl rounded-br-xl mr-[22px]`}
                >
                  <View className="py-6">
                    <TailwindText variant="bodyText1" className="pb-2">
                      {title}
                    </TailwindText>
                    <TailwindText
                      variant="footer"
                      className="text-primary w-[198px]"
                    >
                      {summary}
                    </TailwindText>
                  </View>
                </Link>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <PodcastAudioPlayer />
    </>
  );
}
