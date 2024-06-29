import { formatDate, screenWidth } from "@/utils";
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

const Sermons = () => {
  const { isFullPlayer } = useContext(AppContext);
  const [playlist, setPlaylist] = useState<any[]>([]);
  const getAllSermonsQuery = useQuery({
    queryKey: ["getAllSermons"],
    queryFn: async () => {
      const response = await api.get("/sermon/getAll");
      console.log("response", response);
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
  const [nowPlaying, setNowPlaying] = useState(null);
  const [activeTab, setActiveTab] = useState("All Sermons");

  React.useEffect(() => {
    setPlaylist(getAllSermonsQuery.data?.data?.sermons);
    if (getAllSermonsQuery.data?.data?.sermons?.length) {
      setNowPlaying(getAllSermonsQuery.data?.data?.sermons[0]);
    }
  }, [getAllSermonsQuery.data]);

  return (
    <View style={{ flex: 1 }}>
      {getAllSermonsQuery.isLoading ? (
        <Text>Is Loading....</Text>
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
                backgroundColor: "white",
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
                            activeTab === name ? "#02387c" : "#fff",
                        }}
                        textStyle={{
                          color:
                            activeTab === name ? CustomColor.white : "#00397F",
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
                  {getAllSermonsQuery.data?.data?.sermons?.map((item: any) => {
                    return (
                      <TouchableOpacity
                        key={item?._id}
                        onPress={() => setNowPlaying(item)}
                      >
                        <View className="flex flex-row items-center px-7 py-4 border-b border-ash_200">
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
                                {`${item?.preacher?.first_name}${" "}${
                                  item?.preacher?.last_name
                                }`}
                              </TailwindText>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            )}
          </ScrollView>
        </>
      )}
      {nowPlaying && (
        <View className="">
          <AudioPlayer
            nowPlaying={nowPlaying}
            setNowPlaying={setNowPlaying}
            // playlist={getAllSermonsQuery.data?.data?.sermons}
            playlist={playlist}
            setPlaylist={setPlaylist}
          />
        </View>
      )}
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
