import { Pressable, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import { formatDate, screenWidth } from "@/utils";
import FullImage from "@/components/FullImage";
import sermonHeader from "@/assets/images/sermonHeader.png";
import TailwindText from "@/components/TailwindText";
import { savedSermonsData } from "@/data";
import CustomButton from "@/components/CustomButton";
import { CustomColor } from "@/components/CustomColor";
import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";

export default function sermons() {
  const [tabs, setTabs] = useState([
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

  const getAllSermonsQuery = useQuery({
    queryKey: ["getAllSermons"],
    queryFn: async () => {
      const response = await api.get("/sermon/getAll");
      return response;
    },
  });

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
        <View className="bg-white">
          {getAllSermonsQuery.data?.data?.sermons?.map(
            ({ _id, bookOfBible, preacher, title }: any) => {
              return (
                <View
                  key={_id}
                  className="flex flex-row items-center px-7 py-4 border-b border-ash_200"
                >
                  <View className="mr-6">
                    <TailwindText variant="bodyText3">
                      {formatDate(preacher?.createdAt).month}
                    </TailwindText>
                    <Text className="text-[40px] font-MontserratLight">
                      {formatDate(preacher?.createdAt).day}
                    </Text>
                  </View>

                  <View>
                    <TailwindText variant="bodyText1" className="pb-2">
                      {title}
                    </TailwindText>
                    <View className="flex flex-row items-center">
                      <TailwindText variant="footer" className="pr-2">
                        {`${bookOfBible?.name} ${bookOfBible?.chapter}:${bookOfBible?.verse}`}
                      </TailwindText>
                      <View className="h-3 w-[1px] bg-orange_100"></View>
                      <TailwindText variant="footer" className="pl-2">
                        {`${preacher?.first_name}${" "}${preacher?.last_name}`}
                      </TailwindText>
                    </View>
                  </View>
                </View>
              );
            }
          )}
        </View>
      )}

      {activeTab === "Sermon series" && <Text>ssdjfbjsfb</Text>}
    </Header>
  );
}
