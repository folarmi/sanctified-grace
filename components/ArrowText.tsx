import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import TailwindText from "./TailwindText";
import yellowArrow from "@/assets/images/yellowArrow.png";
import { Link } from "expo-router";

interface ArrowTextProps {
  text: string;
  className?: string;
  href: string;
}

export default function ArrowText({ text, className, href }: ArrowTextProps) {
  return (
    <Link href={href}>
      <View className={`flex flex-row items-center ${className}`}>
        <TailwindText variant="bodyText1" className="text-orange_100 pr-2">
          {text}
        </TailwindText>
        <Image source={yellowArrow} className="w-[18px] h-[18px] pl-2" />
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({});
