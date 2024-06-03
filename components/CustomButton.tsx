import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { CustomColor } from "./CustomColor";

type CustomButtonProps = {
  onPress?: () => void;
  title: string;
  variant?: "primary" | "secondary";
  style?: any; // Define the style prop type
  textStyle?: any; // Define the textStyle prop type
  className?: any;
};

const CustomButton = ({
  onPress,
  title,
  variant = "primary",
  style,
  textStyle,
  className,
}: CustomButtonProps) => {
  const buttonStyle = [
    styles.button,
    variant === "primary" ? styles.primaryButton : styles.secondaryButton,
    style,
  ];

  const buttonTextStyle = [
    styles.buttonText,
    variant === "primary"
      ? styles.primaryButtonText
      : styles.secondaryButtonText,
    textStyle,
  ];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text className={className} style={buttonTextStyle}>
        {title}
      </Text>
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
  },
  primaryButtonText: {
    color: CustomColor.primary,
  },
  secondaryButtonText: {
    color: CustomColor.blue_100,
  },
});

export default CustomButton;
