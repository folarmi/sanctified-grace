import { Image, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { formatTime, screenWidth } from "@/utils";
import TailwindText from "@/components/TailwindText";
import { StatusBar } from "expo-status-bar";
import downWhiteArrow from "@/assets/images/downWhiteArrow.png";
import ellipsis from "@/assets/images/ellipsis.png";
import love from "@/assets/images/love.png";
import rewindWhite from "@/assets/images/rewindWhite.png";
import playWhite from "@/assets/images/playWhite.png";
import forwardWhite from "@/assets/images/forwardWhite.png";
import skipBack from "@/assets/images/skipBack.png";
import skipForward from "@/assets/images/skipForward.png";
import Repeat from "@/assets/images/Repeat.png";
import Download from "@/assets/images/Download.png";
import pauseWhite from "@/assets/images/whitePause.png";
import ProgressBar from "@/components/MusicProgressBar";
import { AppContext } from "@/context/AppContext";

export default function SingleSermon({
  nowPlaying,
  playSound,
  stopSound,
  progress,
  isPlaying,
  status,
}: any) {
  const { setIsFullPlayer } = useContext(AppContext);

  return (
    <View>
      <StatusBar style="light" />
      <View className="bg-primary h-full px-8">
        <View className="mt-10 flex flex-row items-center justify-between mb-8">
          <TouchableOpacity onPress={() => setIsFullPlayer(false)}>
            <Image source={downWhiteArrow} className="w-8 h-8" />
          </TouchableOpacity>
          <Image source={ellipsis} className="w-7 h-7" />
        </View>

        <View className="rounded-2xl w-full mb-8">
          <Image
            source={{ uri: nowPlaying?.bannerUrl }}
            resizeMode="contain"
            style={{
              width: 335,
              height: 335,
              aspectRatio: 1,
            }}
          />
        </View>

        <View className="">
          <TailwindText variant="headingTwo" className=" text-white">
            {nowPlaying?.title}
          </TailwindText>
          <View className="flex flex-row items-center justify-between mt-3 mb-7">
            <TailwindText variant="bodyText2" className=" text-white">
              {`${nowPlaying?.preacher?.first_name} ${nowPlaying?.preacher?.last_name}`}
            </TailwindText>
            <Image source={love} className="w-6 h-6" />
          </View>

          <ProgressBar progress={progress} />
          <View className="flex flex-row items-center justify-between mt-3">
            <TailwindText variant="bodyText3" className="text-white">
              {formatTime(status?.positionMillis)}
            </TailwindText>
            <TailwindText variant="bodyText3" className="text-white">
              {formatTime(status?.durationMillis)}
            </TailwindText>
          </View>

          <View className="flex flex-row items-center justify-between w-full">
            <TouchableOpacity>
              <Image source={skipBack} className="w-6 h-6" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={rewindWhite} className="w-6 h-6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={isPlaying ? stopSound : playSound}>
              <Image
                source={isPlaying ? pauseWhite : playWhite}
                className="w-16 h-16"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={forwardWhite} className="w-6 h-6" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={skipForward} className="w-6 h-6" />
            </TouchableOpacity>
          </View>

          <View className="flex flex-row items-center justify-between mt-16">
            <TouchableOpacity>
              <Image source={Repeat} className="w-6 h-6" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Download} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
