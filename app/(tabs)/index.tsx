import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import midYear from "@/assets/images/midYear.png";
import { screenWidth } from "@/utils";
import TailwindText from "@/components/TailwindText";
import { recentSermons } from "@/data";
import BibleReading from "@/components/BibleReading";
import FullImage from "@/components/FullImage";
import NewPodcastEpisode from "@/components/NewPodcastEpisode";
import FeaturedBooks from "@/components/FeaturedBooks";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import { Link } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";
import Loader from "@/components/Loader";
import ImageCarousel from "@/components/ImageCarousel";

export default function index() {
  const [imageUrls, setImageUrls] = useState<any>([]);
  const getEvent = useQuery({
    queryKey: ["getAllSermons"],
    queryFn: async () => {
      const response = await api.get("/event/getAll?page=1&nPerPage=20");
      return response;
    },
  });

  const getImageUrls = () => {
    let urls: any[] = [];
    getEvent?.data?.data?.events?.map((item: any) => {
      urls.push(item?.bannerUrl);
    });
    return urls;
  };

  useEffect(() => {
    setImageUrls(getImageUrls());

    return () => {};
  }, []);

  const getAllSermonsQuery = useQuery({
    queryKey: ["getAllSermons"],
    queryFn: async () => {
      const response = await api.get("/sermon/getAll");
      return response;
    },
  });
  return (
    <>
      {getAllSermonsQuery.isLoading ? (
        <Loader loading={getAllSermonsQuery.isLoading} />
      ) : (
        <Header className="bg-white">
          {imageUrls.length > 0 ? (
            <ImageCarousel images={imageUrls} />
          ) : (
            <FullImage width={screenWidth} source={midYear} height={256} />
          )}

          <View className="bg-white pt-14">
            <View className="flex flex-row justify-between items-center px-6 mb-4">
              <TailwindText variant="subHeading1">Recent Sermons</TailwindText>
              <Link href="sermons">
                <TailwindText variant="bodyText5" className="text-orange_100">
                  See All
                </TailwindText>
              </Link>
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
              {recentSermons.map(
                ({ id, image, bibleText, preacher, title }) => {
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
                }
              )}
            </ScrollView>

            {/* Sermons */}
            <View className="flex flex-row justify-between items-center px-6 mt-10 mb-4">
              <TailwindText variant="subHeading1" className="">
                Sermons
              </TailwindText>
              <Link href="sermons">
                <TailwindText variant="bodyText5" className="text-orange_100 ">
                  See All
                </TailwindText>
              </Link>
            </View>

            <ScrollView
              contentContainerStyle={{
                display: "flex",
                flexDirection: "row",
              }}
              horizontal
              className="flex flex-row pl-6 pb-10 border-b border-ash_200"
            >
              {getAllSermonsQuery.data?.data?.sermons?.map((item: any) => {
                return (
                  <View key={item?._id} className="mr-4">
                    <View className="w-[163px] h-64 overflow-hidden">
                      <Image
                        source={{ uri: item?.bannerUrl }}
                        className="w-full h-full"
                        resizeMode="stretch"
                        // style={{
                        //   aspectRatio: 1,
                        // }}
                      />
                    </View>

                    <TailwindText
                      variant="subHeading3"
                      className="pt-3 pb-1 w-[163px]"
                    >
                      {item?.title}
                    </TailwindText>
                    <TailwindText variant="footer">
                      {item?.sermonSeries}
                    </TailwindText>
                    <TailwindText variant="footer">
                      {" "}
                      {`${item?.preacher?.first_name}${" "}${
                        item?.preacher?.last_name
                      }`}
                    </TailwindText>
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
      )}
    </>
  );
}

const styles = StyleSheet.create({});
