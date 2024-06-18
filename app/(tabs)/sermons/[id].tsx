import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import api from "@/app/lib/axios";
import { formatTime, screenWidth } from "@/utils";
import { Audio } from "expo-av";
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

export default function SingleSermon() {
  const router = useRouter();
  const navigate = useNavigation();

  const [sound, setSound] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const segments = useLocalSearchParams();
  const { id } = segments;

  const getAllSermonsQuery = useQuery({
    queryKey: ["getSingleSermon"],
    queryFn: async () => {
      const response = await api.get(`sermon/getById?id=${id}`);
      return response;
    },
  });

  //   const playSound = async () => {
  //     console.log("press play", sound);
  //     try {
  //       const { sound } = await Audio.Sound.createAsync(
  //         { uri: getAllSermonsQuery?.data?.data?.sermon?.audioUrl },
  //         { shouldPlay: true },
  //         onPlaybackStatusUpdate
  //       );
  //       setSound(sound);
  //       setIsPlaying(true);
  //     } catch (error) {
  //       console.error("Error playing sound:", error);
  //     }
  //   };

  const onPlaybackStatusUpdate = () => {
    if (status.isLoaded && status.isPlaying) {
      const currentPosition = status.positionMillis;
      const totalDuration = status.durationMillis;
      const currentProgress = (currentPosition / totalDuration) * 100;
      setProgress(currentProgress);
    }
  };

  async function togglePlayPause() {
    console.log(isPlaying, sound);
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    } else {
      const { sound } = await Audio.Sound.createAsync(
        {
          uri: getAllSermonsQuery?.data?.data?.sermon?.audioUrl,
        },
        { shouldPlay: false }
      );
      setSound(sound);
      setIsPlaying(true);
    }
  }

  //   const stopSound = async () => {
  //     try {
  //       if (sound) {
  //         await sound.unloadAsync();
  //         setSound(null);
  //         setIsPlaying(false);
  //         setProgress(0);
  //       }
  //     } catch (error) {
  //       console.error("Error stopping sound:", error);
  //     }
  //   };

  //   console.log(status);
  //   console.log("isPlaying", isPlaying);

  useEffect(() => {
    const fetchAudioInfo = async () => {
      try {
        const soundObject = new Audio.Sound();
        await soundObject.loadAsync({
          uri: getAllSermonsQuery?.data?.data?.sermon?.audioUrl,
        });
        const status = await soundObject.getStatusAsync();
        setStatus(status);
      } catch (error) {
        console.error("Error fetching audio info:", error);
      }
    };
    fetchAudioInfo();

    return () => {};
  }, [getAllSermonsQuery?.data?.data?.sermon?.audioUrl]);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View className="bg-primary h-full">
      <StatusBar style="light" />

      <View className="mt-10 px-8">
        <View className="flex flex-row items-center justify-between mb-8">
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Image source={downWhiteArrow} className="w-8 h-8" />
          </TouchableOpacity>
          <Image source={ellipsis} className="w-7 h-7" />
        </View>

        <View className="rounded-2xl w-full mb-8">
          <Image
            source={{ uri: getAllSermonsQuery?.data?.data?.sermon?.bannerUrl }}
            resizeMode="contain"
            style={{
              //   width: screenWidth,
              width: 335,
              height: 335,
              aspectRatio: 1,
            }}
          />
        </View>

        <View className="">
          <TailwindText variant="headingTwo" className=" text-white">
            {getAllSermonsQuery?.data?.data?.sermon?.title}
          </TailwindText>
          <View className="flex flex-row items-center justify-between mt-3 mb-7">
            <TailwindText variant="bodyText2" className=" text-white">
              {`${getAllSermonsQuery?.data?.data?.sermon?.preacher?.first_name} ${getAllSermonsQuery?.data?.data?.sermon?.preacher?.last_name}`}
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
            {/* <TouchableOpacity onPress={isPlaying ? stopSound : playSound}> */}
            <TouchableOpacity onPress={togglePlayPause}>
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
