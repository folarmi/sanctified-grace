import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "@/components/Header";
import midYear from "@/assets/images/midYear.png";
import { capitalizeFirstLetter, replaceString, screenWidth } from "@/utils";
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
import yellowArrow from "@/assets/images/yellowArrow.png";

export default function index() {
  const [imageUrls, setImageUrls] = useState<any>([]);
  const getEvent = useQuery({
    queryKey: ["getEvents"],
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
        <Loader loading={getAllSermonsQuery?.isLoading} />
      ) : (
        <Header className="bg-white dark:bg-black">
          {imageUrls.length > 0 ? (
            <ImageCarousel images={imageUrls} />
          ) : (
            <FullImage width={screenWidth} source={midYear} height={256} />
          )}

          <View className="bg-white dark:bg-black pt-14">
            <View className="flex flex-row justify-between items-center px-6 mb-4">
              <TailwindText variant="subHeading1">Recent Sermons</TailwindText>
              <Link href="sermons" className="flex flex-row">
                <TailwindText
                  variant="bodyText5"
                  style={{
                    color: "#F9AF1C",
                  }}
                >
                  See All
                </TailwindText>
                <Image
                  source={yellowArrow}
                  className="w-[18px] h-[18px] pl-2"
                />
              </Link>
            </View>

            {/* Recent Sermons */}
            <ScrollView
              contentContainerStyle={{
                display: "flex",
                flexDirection: "row",
              }}
              horizontal
              className="flex flex-row pl-6 pb-10 border-b border-ash_200 dark:border-ash_600"
            >
              {recentSermons.map(
                ({ id, image, bibleText, preacher, title }) => {
                  return (
                    <View key={id} className="">
                      <View
                        style={{
                          borderRadius: 30,
                          overflow: "hidden",
                          marginRight: 8,
                        }}
                      >
                        <Image
                          source={image}
                          style={{ width: 163, height: 163 }}
                          resizeMode="cover"
                          borderRadius={10}
                        />
                      </View>

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

              <Link href="sermons" className="flex flex-row">
                <TailwindText
                  variant="bodyText5"
                  style={{
                    color: "#F9AF1C",
                  }}
                >
                  See All
                </TailwindText>
                <Image
                  source={yellowArrow}
                  className="w-[18px] h-[18px] pl-2"
                />
              </Link>
            </View>

            <ScrollView
              contentContainerStyle={{
                display: "flex",
                flexDirection: "row",
              }}
              horizontal
              className="flex flex-row pl-6 pb-10 border-b border-ash_200 dark:border-ash_600"
            >
              {getAllSermonsQuery.data?.data?.sermons?.map((item: any) => {
                return (
                  <View key={item?._id} className="mr-4">
                    <View
                      style={{
                        width: 163,
                        height: 163,
                        overflow: "hidden",
                        borderRadius: 5,
                      }}
                    >
                      <Image
                        source={{ uri: item?.thumbnailUrl }}
                        style={{
                          width: "100%",
                          height: "100%",
                          resizeMode: "cover",
                        }}
                      />
                    </View>

                    <TailwindText
                      variant="subHeading3"
                      className="pt-3 pb-1 w-[163px]"
                    >
                      {item?.title}
                    </TailwindText>
                    <TailwindText variant="footer">
                      {capitalizeFirstLetter(item?.sermonSeries).replace(
                        "_",
                        " "
                      )}

                      {/* {item?.sermonSeries} */}
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
