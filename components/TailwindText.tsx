import { View, Text } from "react-native";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import React from "react";

type Variant =
  | "heading0"
  | "heading1"
  | "headingOne"
  | "headingTwo"
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
      return "font-GeorgiaBold text-[64px] font-medium dark:text-white";
    case "heading1":
      return "font-GeorgiaBold text-5xl font-medium dark:text-white";
    case "headingOne":
      return "font-GeorgiaBold text-2xl dark:text-white";
    case "headingTwo":
      return "font-GeorgiaBold text-xl dark:text-white";
    case "subHeading1":
      return "text-4xl font-GeorgiaBold dark:text-white";
    case "subHeading2":
      return "text-2xl font-MontserratSemiBold dark:text-white";
    case "subHeadingTwo":
      return "text-xl font-MontserratSemiBold dark:text-white";
    case "subHeading3":
      return "text-sm font-MontserratSemiBold dark:text-white";
    case "subHeading4":
      return "text-xs font-GeorgiaBold dark:text-white";
    case "subHeading5":
      return "text-xs font-normal font-Georgia dark:text-white";
    case "bodyText1":
      return "text-base font-MontserratMedium dark:text-white";
    case "bodyText2":
      return "text-sm font-MontserratLight dark:text-white";
    case "bodyTextTwo":
      return "text-base font-MontserratLight dark:text-white";
    case "bodyText3":
      return "text-xs font-MontserratLight dark:text-white";
    case "bodyText4":
      return "text-xs font-MontserratMedium dark:text-white";
    case "bodyText5":
      return "text-sm font-MontserratMedium dark:text-white";
    case "bodyText6":
      return "text-sm font-MontserratLight dark:text-white";
    case "footer":
      return "text-xs font-MontserratLight dark:text-white";
    default:
      return "";
  }
};

export default function TailwindText({
  variant,
  className,
  style,
  children,
}: TailwindTextProps) {
  const baseClasses = getBaseClasses(variant);

  return (
    <Text style={style} className={`${baseClasses} ${className || ""}`}>
      {children}
    </Text>
  );
}
