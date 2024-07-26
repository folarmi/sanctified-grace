import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "@/components/Header";
import ResourcesHeader from "@/components/ResourcesHeader";
import RadialGradientBackground from "@/components/RadialBackground";
import rightArrow from "@/assets/images/rightArrow.png";
import leftArrowTwo from "@/assets/images/leftArrowTwo.png";
import TailwindText from "@/components/TailwindText";
// import { todayBibleReadingData } from "@/data";
import CustomButton from "@/components/CustomButton";
import { useQuery } from "@tanstack/react-query";
import api from "@/app/lib/axios";
import { formatDate } from "@/utils";
import Loader from "@/components/Loader";

export default function todayBibleReading() {
  const getTodayBibleReading = useQuery({
    queryKey: ["getTodayBibleReading"],
    queryFn: async () => {
      const response = await api.get(
        `/plan/getDailyReadingPlan?month=${formatDate(new Date()).month}&day=${
          formatDate(new Date()).day
        }`
      );
      return response;
    },
  });
  // getTodayBibleReading.isLoading = true;
  return (
    <Header>
      {getTodayBibleReading.isLoading ? (
        <Loader loading={true} />
      ) : (
        <>
          <ResourcesHeader text="Today’s Bible Reading" />

          <RadialGradientBackground FROM_COLOR="#115EBC" TO_COLOR="#000E1E">
            <View className="px-6 h-full">
              <View className="flex flex-row items-center justify-between my-11">
                <View className="flex flex-row items-center ">
                  <Image source={leftArrowTwo} className="w-6 h-6" />
                  <TailwindText variant="footer" className="text-white pl-2">
                    Prev
                  </TailwindText>
                </View>

                <View className="flex flex-row items-center">
                  <TailwindText variant="footer" className="text-white pr-2">
                    Next
                  </TailwindText>
                  <Image source={rightArrow} className="w-6 h-6" />
                </View>
              </View>

              {getTodayBibleReading?.data?.data?.map(
                (item: any, index: number) => {
                  return (
                    <View
                      key={index}
                      className="border border-blue_100 rounded-md py-4 px-6 mb-1"
                    >
                      <TailwindText
                        variant="bodyText1"
                        className={`text-white text-center`}
                        //                         ${
                        //                         index === 0 ? "text-left" : "text-center"
                        //  }
                        //                       `}
                      >
                        {item}
                      </TailwindText>
                    </View>
                  );
                }
              )}

              <View className="flex items-center my-10 w-full">
                <CustomButton title="Finish" className=" w-[205px]" />
              </View>

              <TailwindText
                variant="subHeading4"
                className="text-white pb-4 text-center"
              >
                Memory Verse for the Day
              </TailwindText>

              <View className="w-full flex items-center">
                <TailwindText
                  variant="subHeading5"
                  className="text-white pb-1  w-[246px]"
                >
                  All Scripture is given by inspiration of God and is profitable
                  for doctrine, for reproof, for correction, for instruction in
                  righteousness.
                </TailwindText>
              </View>

              <TailwindText
                variant="subHeading5"
                className="text-white pb-10 text-center"
              >
                2 Timothy 3:16
              </TailwindText>
            </View>
          </RadialGradientBackground>
        </>
      )}
    </Header>
  );
}
