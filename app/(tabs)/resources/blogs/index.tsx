import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import FullImage from "@/components/FullImage";
import { screenWidth } from "@/utils";
import blogheader from "@/assets/images/blogHeader.png";
import CustomButton from "@/components/CustomButton";
import { CustomColor } from "@/components/CustomColor";
import { blogPostsData } from "@/data";
import TailwindText from "@/components/TailwindText";

export default function index() {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Devotional",
    },
    {
      id: 3,
      name: "The Gospel",
    },
    {
      id: 4,
      name: "Escatology",
    },
  ]);

  const [activeTab, setActiveTab] = useState("All");

  return (
    <Header className="bg-white">
      <FullImage width={screenWidth} source={blogheader} height={164} />

      <ScrollView horizontal>
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

      {blogPostsData?.map(({ id, author, category, date, image, name }) => {
        return (
          <View
            key={id}
            className="flex flex-row items-center mb-2 border-b border-[#d9d9d9] h-24"
          >
            <Image source={image} className="w-24 h-24 mr-6" />

            <View>
              <TailwindText variant="subHeading3" className="pb-2">
                {name}
              </TailwindText>

              <View className="flex flex-row items-center">
                <TailwindText variant="footer" className="pr-2">
                  {author}
                </TailwindText>
                <View className="h-3 w-[1px] bg-black"></View>
                <TailwindText variant="footer" className="pl-2 text-blue_100">
                  {category}
                </TailwindText>
              </View>

              <TailwindText variant="footer">{date}</TailwindText>
            </View>
          </View>
        );
      })}
    </Header>
  );
}
