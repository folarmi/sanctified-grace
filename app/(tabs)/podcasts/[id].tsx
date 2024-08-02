import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import podcastOne from "@/assets/images/podcastHeader.png";
import Header from "@/components/Header";
import FullImage from "@/components/FullImage";
import { screenWidth } from "@/utils";
import { singlePodcastsData } from "@/data";
import TailwindText from "@/components/TailwindText";
import ashCircleArrow from "@/assets/images/ashCircleArrow.png";
import { useRouter } from "expo-router";
import AudioPlayerHeader from "@/components/AudioPlayerHeader";
import PodcastAudioPlayer from "@/components/PodcastAudioPlayer";

export default function SinglePodcast() {
  const router = useRouter();
  const [isFullPlayer, setIsFullPlayer] = useState(false);
  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <AudioPlayerHeader />
      <ScrollView>
        {!isFullPlayer && (
          <FullImage width={screenWidth} source={podcastOne} height={164} />
        )}

        <TouchableOpacity
          onPress={() => handleGoBack()}
          className="pl-8 py-2 border-b border-ash_200 dark:border-ash_600 dark:bg-dark_mode w-full"
        >
          <Image source={ashCircleArrow} className="w-11 h-11 " />
        </TouchableOpacity>

        {singlePodcastsData.map(
          ({ id, img, length, name, summary, uploaded }) => {
            return (
              <View className="px-6 dark:bg-dark_mode border-b border-ash_200 dark:border-ash_600 py-5">
                <View key={id} className="flex flex-row items-center ">
                  <View>
                    <Image
                      source={img}
                      className="w-9 h-9 rounded-md mr-[9px]"
                    />
                  </View>

                  <View>
                    <TailwindText variant="subHeading3" className="pb-[1px]">
                      {name}
                    </TailwindText>

                    <View className="flex flex-row items-center">
                      <TailwindText variant="footer" className="pr-2">
                        {uploaded}
                      </TailwindText>
                      <View className="h-3 w-[1px] bg-orange_100"></View>
                      <TailwindText variant="footer" className="pl-2">
                        {length}
                      </TailwindText>
                    </View>
                  </View>
                </View>

                <TailwindText variant="footer" className="pt-[10px]">
                  {summary}
                </TailwindText>
              </View>
            );
          }
        )}
      </ScrollView>

      <PodcastAudioPlayer />
    </>
  );
}
