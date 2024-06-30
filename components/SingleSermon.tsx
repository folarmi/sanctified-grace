import { Image, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { formatTime } from "@/utils";
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
import { AppContext } from "@/context/AppContext";
import Slider from "@react-native-community/slider";
import { AudioPlayerContext } from "@/context/AudioPlayerContext";

export default function SingleSermon({}: // playlist?.[currentIndex],
any) {
  const { setIsFullPlayer } = useContext(AppContext);
  const {
    status,
    playlist,
    currentIndex,
    playPauseSound,
    onSeekSliderValueChange,
    previousTrack,
    rewindSound,
    isPlaying,
    forwardSound,
    nextTrack,
    shufflePlaylist,
  } = useContext(AudioPlayerContext);

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

        <View
          className=""
          style={{ width: 335, height: 335, marginBottom: 32 }}
        >
          <Image
            source={{ uri: playlist?.[currentIndex]?.bannerUrl }}
            className="w-full h-full rounded-2xl"
            resizeMode="cover"
            style={{
              // width: 335,
              // height: 335,
              aspectRatio: 1,
            }}
          />
        </View>

        <View className="">
          <TailwindText variant="headingTwo" className=" text-white">
            {playlist?.[currentIndex]?.title}
          </TailwindText>
          <View className="flex flex-row items-center justify-between mt-3 mb-7">
            <TailwindText variant="bodyText2" className=" text-white">
              {`${playlist?.[currentIndex]?.preacher?.first_name} ${playlist?.[currentIndex]?.preacher?.last_name}`}
            </TailwindText>
            <Image source={love} className="w-6 h-6" />
          </View>

          {/* <ProgressBar progress={progress} /> */}
          <Slider
            className="w-full mb-4"
            minimumValue={0}
            maximumValue={1}
            value={status.positionMillis / status.durationMillis}
            onSlidingComplete={onSeekSliderValueChange}
            minimumTrackTintColor="#ffffff" // Green
            maximumTrackTintColor="#ffffff63" // Light Gray
            thumbTintColor="#ffffff" // Green
          />
          <View className="flex flex-row items-center justify-between mt-3">
            <TailwindText variant="bodyText3" className="text-white">
              {formatTime(status?.positionMillis) || "00:00:00"}
            </TailwindText>
            <TailwindText variant="bodyText3" className="text-white">
              {formatTime(status?.durationMillis) || "00:00:00"}
            </TailwindText>
          </View>

          <View className="flex flex-row items-center justify-between w-full">
            <TouchableOpacity onPress={previousTrack}>
              <Image source={skipBack} className="w-6 h-6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={rewindSound}>
              <Image source={rewindWhite} className="w-6 h-6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={playPauseSound}>
              <Image
                source={isPlaying ? pauseWhite : playWhite}
                className="w-16 h-16"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={forwardSound}>
              <Image source={forwardWhite} className="w-6 h-6" />
            </TouchableOpacity>
            <TouchableOpacity onPress={nextTrack}>
              <Image source={skipForward} className="w-6 h-6" />
            </TouchableOpacity>
          </View>

          <View className="flex flex-row items-center justify-between mt-16">
            <TouchableOpacity onPress={shufflePlaylist}>
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
