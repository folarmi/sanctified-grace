import { Image, StyleSheet, View } from "react-native";
import facebook from "@/assets/images/facebook.png";
import twitter from "@/assets/images/twitter.png";
import apple from "@/assets/images/apple.png";
import google from "@/assets/images/google.png";

export default function Social() {
  return (
    <View className="flex flex-row items-center justify-center my-5">
      <Image className="w-12 h-12 pl-3" source={google} />
      <Image className="w-12 h-12 pl-3" source={apple} />
      <Image className="w-12 h-12 pl-3" source={facebook} />
      <Image className="w-12 h-12" source={twitter} />
    </View>
  );
}

const styles = StyleSheet.create({});
