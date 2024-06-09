import { View, Text } from "react-native";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import React from "react";

type Variant =
  | "heading0"
  | "heading1"
  | "subHeading1"
  | "subHeading2"
  | "subHeadingTwo"
  | "subHeading3"
  | "subHeading4"
  | "subHeading5"
  | "bodyText1"
  | "bodyText2"
  | "bodyTextTwo"
  | "bodyText3"
  | "bodyText4"
  | "bodyText5"
  | "bodyText6"
  | "footer";

interface TailwindTextProps extends RNTextProps {
  variant: Variant;
  className?: string;
}

const getBaseClasses = (variant: Variant) => {
  switch (variant) {
    case "heading0":
      return "font-GeorgiaBold text-[64px] font-medium";
    case "heading1":
      return "font-GeorgiaBold text-5xl font-medium";
    case "subHeading1":
      return "text-4xl font-GeorgiaBold";
    case "subHeading2":
      return "text-2xl font-MontserratSemiBold";
    case "subHeadingTwo":
      return "text-xl font-MontserratSemiBold";
    case "subHeading3":
      return "text-sm font-MontserratSemiBold";
    case "subHeading4":
      return "text-xs font-GeorgiaBold";
    case "subHeading5":
      return "text-xs font-normal font-Georgia";
    case "bodyText1":
      return "text-base font-MontserratMedium";
    case "bodyText2":
      return "text-sm font-MontserratLight";
    case "bodyTextTwo":
      return "text-base font-MontserratLight";
    case "bodyText3":
      return "text-xs font-MontserratLight";
    case "bodyText4":
      return "text-xs font-MontserratMedium";
    case "bodyText5":
      return "text-sm font-MontserratMedium";
    case "bodyText6":
      return "text-sm font-MontserratLight";
    case "footer":
      return "text-xs font-MontserratLight";
    default:
      return "";
  }
};

export default function TailwindText({
  variant,
  className,
  children,
}: TailwindTextProps) {
  const baseClasses = getBaseClasses(variant);

  return (
    <Text className={`${baseClasses} ${className || ""}`}>{children}</Text>
  );
}
