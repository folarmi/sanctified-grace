import { capitalizeFirstLetter, formatDate, screenWidth } from "@/utils";
import FullImage from "@/components/FullImage";
import sermonHeader from "@/assets/images/sermonHeader.png";
import CustomButton from "@/components/CustomButton";
import { CustomColor } from "@/components/CustomColor";
import { useQuery } from "@tanstack/react-query";
import api from "@/app/lib/axios";
import { AppContext } from "@/context/AppContext";
import TailwindText from "@/components/TailwindText";

import React, { useState, useContext } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

import AudioPlayerHeader from "@/components/AudioPlayerHeader";
import AudioPlayer from "@/components/AudioPlayer";
import Loader from "@/components/Loader";
import { AudioPlayerContext } from "@/context/AudioPlayerContext";
import ThemeContext from "@/app/context/ThemeContext";

const Sermons = () => {
  const { isFullPlayer } = useContext(AppContext);
  const { isDarkMode } = useContext<any>(ThemeContext);

  const { setPlaylist, playPauseSound, setCurrentIndex } =
    useContext(AudioPlayerContext);
  const getAllSermonsQuery = useQuery({
    queryKey: ["getAllSermons"],
    queryFn: async () => {
      const response = await api.get("/sermon/getAll");
      return response;
    },
  });

  const [tabs] = useState([
    {
      id: 1,
      name: "All Sermons",
    },
    {
      id: 2,
      name: "Sermon series",
    },
    {
      id: 3,
      name: "Women",
    },
  ]);
  const [activeTab, setActiveTab] = useState("All Sermons");

  const handleSongPress = (index: number) => {
    setCurrentIndex(index);
    // await loadSound();
    // setIsPlaying(true);
    playPauseSound();
  };

  React.useEffect(() => {
    setPlaylist(getAllSermonsQuery.data?.data?.sermons);
    if (getAllSermonsQuery.data?.data?.sermons?.length) {
    }
  }, [getAllSermonsQuery.data]);

  return (
    <View style={{ flex: 1 }}>
      {getAllSermonsQuery.isLoading ? (
        <Loader loading={getAllSermonsQuery.isLoading} />
      ) : (
        <>
          <AudioPlayerHeader />
          <ScrollView>
            {!isFullPlayer && (
              <FullImage
                width={screenWidth}
                source={sermonHeader}
                height={164}
              />
            )}

            <ScrollView
              contentContainerStyle={{
                backgroundColor: isDarkMode ? "black" : "white",
              }}
              horizontal
            >
              <View className="flex flex-row py-3 px-6 border-b border-ash_200">
                {tabs.map(({ id, name }) => (
                  <Pressable key={id} onPress={() => setActiveTab(name)}>
                    <View className="mr-3">
                      <CustomButton
                        title={name}
                        variant="secondary"
                        style={{
                          backgroundColor:
                            activeTab === name
                              ? isDarkMode
                                ? CustomColor.orange
                                : CustomColor.blue_300
                              : isDarkMode
                              ? CustomColor.black
                              : CustomColor.white,
                        }}
                        textStyle={{
                          color:
                            activeTab === name
                              ? isDarkMode
                                ? CustomColor.primary
                                : CustomColor.white
                              : isDarkMode
                              ? CustomColor.sky_blue
                              : CustomColor.blue_300,
                        }}
                      />
                    </View>
                  </Pressable>
                ))}
              </View>
            </ScrollView>

            {activeTab === "All Sermons" && (
              <View style={styles.container}>
                <ScrollView style={styles.songList}>
                  {getAllSermonsQuery.data?.data?.sermons?.map(
                    (item: any, index: number) => {
                      return (
                        <TouchableOpacity
                          key={item?._id}
                          onPress={() => handleSongPress(index)}
                        >
                          <View className="flex flex-row items-center px-7 py-4 border-b border-ash_200 dark:border-ash_600 dark:bg-dark_mode">
                            <View className="mr-6">
                              <TailwindText variant="bodyText3">
                                {formatDate(item?.preacher?.createdAt).month}
                              </TailwindText>
                              <Text className="text-[40px] font-MontserratLight dark:text-white">
                                {formatDate(item?.preacher?.createdAt).day}
                              </Text>
                            </View>

                            <View>
                              <TailwindText
                                variant="bodyText1"
                                className="pb-2"
                              >
                                {item?.title}
                              </TailwindText>
                              <View className="flex flex-row items-center">
                                <TailwindText variant="footer">
                                  {`${capitalizeFirstLetter(
                                    item?.bookOfBible?.name
                                  )} ${item?.bookOfBible?.chapter}: ${
                                    item?.bookOfBible?.verse[0]
                                  }`}
                                </TailwindText>
                                <TailwindText variant="footer">
                                  {" "}
                                  -{" "}
                                </TailwindText>
                                <TailwindText variant="footer">
                                  {`${
                                    item?.bookOfBible?.verse[1]
                                      ? item?.bookOfBible?.verse[1]
                                      : ""
                                  }`}
                                </TailwindText>
                                <View className="h-3 w-[1px] bg-orange_100 mx-2"></View>
                                <TailwindText variant="footer">
                                  {`${item?.preacher?.first_name}${" "}${
                                    item?.preacher?.last_name
                                  }`}
                                </TailwindText>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    }
                  )}
                </ScrollView>
              </View>
            )}
          </ScrollView>
        </>
      )}

      <AudioPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    zIndex: 0,
  },
  songList: {
    flex: 1,
    // marginBottom: 60, // Adjust as per your audio player height
  },
  songItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  songTitle: {
    fontSize: 16,
  },
  audioPlayer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
    // paddingVertical: 12,
    // paddingHorizontal: 16,
  },
  currentSongText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default Sermons;
