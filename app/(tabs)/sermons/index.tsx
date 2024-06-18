import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import { formatDate, screenWidth } from "@/utils";
import FullImage from "@/components/FullImage";
import sermonHeader from "@/assets/images/sermonHeader.png";
import TailwindText from "@/components/TailwindText";
// import { savedSermonsData } from "@/data";
import CustomButton from "@/components/CustomButton";
import { CustomColor } from "@/components/CustomColor";
import { useQuery } from "@tanstack/react-query";
import AudioPlayer from "@/components/AudioPlayer";
import api from "@/app/lib/axios";

export default function sermons() {
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
  const [nowPlaying, setNowPlaying] = useState(
    getAllSermonsQuery.data?.data?.sermons[0]
  );
  const [activeTab, setActiveTab] = useState("All Sermons");

  return (
    <Header className="bg-white">
      <FullImage width={screenWidth} source={sermonHeader} height={164} />

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
                    backgroundColor: activeTab === name ? "#02387c" : "#fff",
                  }}
                  textStyle={{
                    color: activeTab === name ? CustomColor.white : "#00397F",
                  }}
                />
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {activeTab === "All Sermons" && (
        <>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 80,
            }}
          >
            <View className="bg-white">
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
            </View>
          </ScrollView>
          <AudioPlayer nowPlaying={nowPlaying} />
        </>
      )}

      {activeTab === "Sermon series" && <Text>ssdjfbjsfb</Text>}
    </Header>
  );
}
