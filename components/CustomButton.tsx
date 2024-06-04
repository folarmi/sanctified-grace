// import React from "react";
// import {
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   ViewStyle,
//   TextStyle,
// } from "react-native";
// import { CustomColor } from "./CustomColor";
// import { Link } from "expo-router";

// type CustomButtonProps = {
//   onPress?: () => void;
//   title: string;
//   variant?: "primary" | "secondary";
//   style?: ViewStyle; // Define the style prop type
//   textStyle?: TextStyle; // Define the textStyle prop type
//   className?: string;
//   href?: string;
// };

// const CustomButton = ({
//   onPress,
//   title,
//   variant = "primary",
//   style,
//   textStyle,
//   className,
//   href,
// }: CustomButtonProps) => {
//   const buttonStyle = StyleSheet.flatten([
//     styles.button,
//     variant === "primary" ? styles.primaryButton : styles.secondaryButton,
//     style,
//   ]);

//   const buttonTextStyle = StyleSheet.flatten([
//     styles.buttonText,
//     variant === "primary"
//       ? styles.primaryButtonText
//       : styles.secondaryButtonText,
//     textStyle,
//   ]);

//   if (href) {
//     return (
//       <Link href={href} style={buttonStyle} className={className}>
//         <Text style={buttonTextStyle}>{title}</Text>
//       </Link>
//     );
//   }

//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={buttonStyle}
//       className={className}
//     >
//       <Text style={buttonTextStyle}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 32,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 14,
//     paddingHorizontal: 32,
//   },
//   primaryButton: {
//     backgroundColor: CustomColor.orange,
//   },
//   secondaryButton: {
//     backgroundColor: CustomColor.white,
//     borderColor: CustomColor.blue_200,
//     borderWidth: 1,
//   },
//   buttonText: {
//     fontSize: 14,
//     fontFamily: "MontserratMedium",
//     textAlign: "center", // Ensure text is centered
//   },
//   primaryButtonText: {
//     color: CustomColor.primary,
//   },
//   secondaryButtonText: {
//     color: CustomColor.blue_100,
//   },
// });

// export default CustomButton;

import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { CustomColor } from "./CustomColor";
import { Link } from "expo-router";

type CustomButtonProps = {
  onPress?: () => void;
  title: string;
  variant?: "primary" | "secondary";
  style?: ViewStyle | ViewStyle[]; // Allow single style or array of styles
  textStyle?: TextStyle | TextStyle[]; // Allow single textStyle or array of textStyles
  className?: string;
  href?: string;
};

const CustomButton = ({
  onPress,
  title,
  variant = "primary",
  style,
  textStyle,
  className,
  href,
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

  const ButtonContent = (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
      className={className}
    >
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );

  if (href) {
    return (
      <Link href={href} style={buttonStyle} className={className} asChild>
        <Text style={buttonTextStyle}>{title}</Text>
      </Link>
    );
  }

  return ButtonContent;
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
