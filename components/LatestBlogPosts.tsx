import { Image, View } from "react-native";
import React from "react";
import TailwindText from "./TailwindText";
import { screenWidth } from "@/utils";
import ArrowText from "./ArrowText";
import latestBlogPost from "@/assets/images/latestBlogPost.png";
import CustomButton from "./CustomButton";

export default function LatestBlogPosts() {
  return (
    <View className="mt-10 px-6 pb-10">
      <TailwindText variant="subHeading1" className="pb-10">
        Latest Blog Posts
      </TailwindText>

      <View style={{ width: "100%" }}>
        <Image
          source={latestBlogPost}
          style={{ width: screenWidth - 42, height: 175 }}
          resizeMode="cover"
          className="mt-4 rounded-t-2xl"
        />
      </View>

      <View
        style={{
          elevation: 20,
          shadowColor: "#000",
        }}
        className="shadow-2xl bg-white rounded-b-2xl px-4"
      >
        <TailwindText variant="subHeadingTwo" className="pt-6 pb-4">
          Finding the Right Church Family for You
        </TailwindText>
        <TailwindText variant="bodyText6">April 14th, 2024</TailwindText>
        <TailwindText
          variant="bodyTextTwo"
          className="leading-6 text-justify py-6"
        >
          Have you ever wondered what church to go to? particularly when you
          just relocated into a new community, and you know you need that
          fellowship of the saints to help you on your christian work
        </TailwindText>

        <ArrowText href="resources/blogs" text="Read Post" className="mb-8" />
      </View>

      <CustomButton title="See Older Posts" className="my-8" />
    </View>
  );
}
