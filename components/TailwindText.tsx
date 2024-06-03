import { View, Text } from "react-native";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import React from "react";

type Variant =
  | "heading0"
  | "heading1"
  | "subHeading1"
  | "subHeading2"
  | "bodyText1"
  | "bodyText2"
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
      return "text-4xl font-MontserratSemiBold";
    case "subHeading2":
      return "text-2xl font-MontserratSemiBold";
    case "bodyText1":
      return "text-base font-MontserratMedium";
    case "bodyText2":
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
