import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import midYear from "@/assets/images/midYear.png";
import { screenWidth } from "@/utils";
import TailwindText from "@/components/TailwindText";
import { recentSermons, sermonSeries } from "@/data";
import BibleReading from "@/components/BibleReading";
import FullImage from "@/components/FullImage";
import NewPodcastEpisode from "@/components/NewPodcastEpisode";
import FeaturedBooks from "@/components/FeaturedBooks";
import LatestBlogPosts from "@/components/LatestBlogPosts";

export default function index() {
  return (
    <Header className="bg-white">
      <FullImage width={screenWidth} source={midYear} height={256} />

      <View className="bg-white mt-14">
        <View className="flex flex-row justify-between items-center px-6 mb-4">
          <TailwindText variant="subHeading1">Recent Sermons</TailwindText>
          <TailwindText variant="bodyText5" className="text-orange_100">
            See All
          </TailwindText>
        </View>

        {/* Recent Sermons */}
        <ScrollView
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
          }}
          horizontal
          className="flex flex-row pl-6 pb-10 border-b border-ash_200"
        >
          {recentSermons.map(({ id, image, bibleText, preacher, title }) => {
            return (
              <View key={id} className="mr-4">
                <FullImage width={163} source={image} height={256} />
                <TailwindText
                  variant="subHeading3"
                  className="pt-3 pb-1 w-[163px]"
                >
                  {title}
                </TailwindText>
                <TailwindText variant="footer" className="">
                  {bibleText}
                </TailwindText>
                <TailwindText variant="footer" className="">
                  {preacher}
                </TailwindText>
              </View>
            );
          })}
        </ScrollView>

        {/* Sermons */}
        <View className="flex flex-row justify-between items-center px-6 mt-10 mb-4">
          <TailwindText variant="subHeading1" className="">
            Sermons
          </TailwindText>
          <TailwindText variant="bodyText5" className="text-orange_100 ">
            See All
          </TailwindText>
        </View>

        <ScrollView
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
          }}
          horizontal
          className="flex flex-row pl-6 pb-10 border-b border-ash_200"
        >
          {sermonSeries.map(({ id, image, preacher, title, series }) => {
            return (
              <View key={id} className="mr-4">
                <FullImage width={163} source={image} height={256} />

                <TailwindText
                  variant="subHeading3"
                  className="pt-3 pb-1 w-[163px]"
                >
                  {title}
                </TailwindText>
                <TailwindText variant="footer">{series}</TailwindText>
                <TailwindText variant="footer">{preacher}</TailwindText>
              </View>
            );
          })}
        </ScrollView>

        <BibleReading />
        <NewPodcastEpisode />
        <FeaturedBooks />
        <LatestBlogPosts />
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({});
