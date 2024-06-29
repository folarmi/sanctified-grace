import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { CustomColor } from "./CustomColor";
import { Link } from "expo-router";
import { BallIndicator } from "react-native-indicators";

type CustomButtonProps = {
  onPress?: () => void;
  title: string;
  variant?: "primary" | "secondary";
  style?: ViewStyle | ViewStyle[]; // Allow single style or array of styles
  textStyle?: TextStyle | TextStyle[]; // Allow single textStyle or array of textStyles
  className?: string;
  href?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

const CustomButton = ({
  onPress,
  title,
  variant = "primary",
  style,
  textStyle,
  className,
  href,
  disabled,
  isLoading = false,
}: CustomButtonProps) => {
  const buttonStyle = StyleSheet.flatten([
    styles.button,
    variant === "primary" ? styles.primaryButton : styles.secondaryButton,
    style,
  ]);

  const buttonTextStyle = StyleSheet.flatten([
    styles.buttonText,
    variant === "primary"
      ? styles.primaryButtonText
      : styles.secondaryButtonText,
    textStyle,
  ]);

  const ButtonContent = isLoading ? (
    <BallIndicator color={"#000"} size={20} />
  ) : (
    <Text style={buttonTextStyle}>{title}</Text>
  );

  if (href) {
    return (
      <Link href={href} style={buttonStyle} className={className} asChild>
        <TouchableOpacity
          style={buttonStyle}
          className={className}
          disabled={isLoading || disabled}
        >
          {ButtonContent}
        </TouchableOpacity>
      </Link>
    );
  }

  // return ButtonContent;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
      className={className}
      disabled={isLoading || disabled}
    >
      {ButtonContent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  primaryButton: {
    backgroundColor: CustomColor.orange,
  },
  secondaryButton: {
    backgroundColor: CustomColor.white,
    borderColor: CustomColor.blue_200,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "MontserratMedium",
    textAlign: "center", // Ensure text is centered
  },
  primaryButtonText: {
    color: CustomColor.primary,
  },
  secondaryButtonText: {
    color: CustomColor.blue_100,
  },
});

export default CustomButton;
