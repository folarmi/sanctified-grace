import ScrollViewLayout from "@/components/ScrollViewLayout";
import TailwindText from "@/components/TailwindText";
import loginHeader from "../assets/images/loginHeader.png";
import { Image, View } from "react-native";
import { screenWidth } from "@/utils";
import CustomButton from "@/components/CustomButton";
import Arc from "@/components/Arc";
import "expo-router/entry";

export default function Index() {
  return (
    <ScrollViewLayout className="bg-white">
      <View className="">
        <View style={{ width: "100%" }}>
          <Image
            source={loginHeader}
            alt="login header"
            style={{ width: screenWidth, height: 452 }}
            resizeMode="cover"
          />
        </View>
        <Arc />
      </View>

      <TailwindText variant="heading1" className="text-center pb-12">
        Welcome
      </TailwindText>

      <View className="w-full flex flex-row justify-center">
        <TailwindText
          variant="bodyText3"
          className="text-center w-[298px] leading-6"
        >
          Let the word of Christ dwell in you richly in all wisdom; teaching and
          admonishing one another in psalms and hymns and spiritual songs,
          singing with grace in your hearts to the Lord.
        </TailwindText>
      </View>

      <TailwindText className="text-center pt-5" variant="bodyText4">
        Colossians 3:16 (KJV){" "}
      </TailwindText>

      <View className="my-12 flex items-center justify-center">
        <CustomButton title="Log in" className=" w-[164px]" href="/login" />

        <View className="mt-6">
          <CustomButton title="Sign up" className="w-[164px]" href="/signup" />
        </View>
      </View>
    </ScrollViewLayout>
  );
}

// Sign up curve
// <Svg
// height={100}
// width={screenWidth}
// style={{ position: "absolute", bottom: 0 }}
// >
// <Path
//   d={`M0,0 Q${
//     screenWidth / 4
//   },100 ${screenWidth},0 L${screenWidth},100 L0,100 Z`}
//   fill="white"
// />
// <RectangleWithSemiCircle />
// </Svg>
