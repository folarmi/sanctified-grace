import RectangleWithSemiCircle from "@/components/RectangleWithSemiCircle";
import ScrollViewLayout from "@/components/ScrollViewLayout";
import TailwindText from "@/components/TailwindText";
import loginHeader from "../assets/images/loginHeader.png";
import { Dimensions, Image, View } from "react-native";
import { screenWidth } from "@/utils";

export default function Index() {
  // ${screenHeight / 2}
  return (
    <ScrollViewLayout className="">
      <View style={{ width: "100%" }}>
        <Image
          source={loginHeader}
          alt="login header"
          style={{ width: screenWidth, height: 452 }}
          resizeMode="cover"
        />
      </View>

      <RectangleWithSemiCircle />
      <TailwindText variant="heading0">test1</TailwindText>
      {/* <RectangleWithSemiCircle /> */}
      {/* <TailwindText variant="heading0">test1</TailwindText>
      <TailwindText variant="heading1">test1</TailwindText>
      <TailwindText variant="subHeading1">test1</TailwindText>
      <TailwindText variant="subHeading2">test1</TailwindText>
      <TailwindText variant="bodyText1">test1</TailwindText>
      <TailwindText variant="bodyText2">test1</TailwindText>
      <TailwindText variant="footer">test1</TailwindText> */}
    </ScrollViewLayout>
  );
}
