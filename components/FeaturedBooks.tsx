import { ScrollView, Text, View } from "react-native";
import React from "react";
import TailwindText from "./TailwindText";
import { featuredBooks } from "@/data";
import FullImage from "./FullImage";
import { Link } from "expo-router";

export default function FeaturedBooks() {
  return (
    <View className="mt-10 px-6 pb-10 border-b border-ash_200 dark:border-ash_600">
      <TailwindText variant="subHeading1" className="pb-10">
        Featured Books
      </TailwindText>

      <ScrollView
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
        }}
        horizontal
        className="flex flex-row"
      >
        {featuredBooks.map(({ id, image, amount, title, author }) => {
          return (
            <Link className="mr-4" href="resources/bookSummary" key={id}>
              <View>
                <FullImage width={163} source={image} height={263} />

                <TailwindText
                  variant="subHeading3"
                  className="pt-3 pb-1 w-[163px]"
                >
                  {title}
                </TailwindText>
                <TailwindText variant="footer">{author}</TailwindText>
                <TailwindText variant="footer">{amount}</TailwindText>
              </View>
            </Link>
          );
        })}
      </ScrollView>
    </View>
  );
}
