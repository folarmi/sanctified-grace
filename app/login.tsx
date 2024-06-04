import { StyleSheet, Image, View } from "react-native";
import React from "react";
import ScrollViewLayout from "@/components/ScrollViewLayout";
import loginHeader from "@/assets/images/loginHeader.png";
import { screenWidth } from "@/utils";
import Arc from "@/components/Arc";
import circledArrow from "@/assets/images/circledArrow.png";
import TailwindText from "@/components/TailwindText";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import TextBetweenLines from "@/components/TextBetweenLines";
import Social from "@/components/Social";
import { Link } from "expo-router";
import FullImage from "@/components/FullImage";

export default function login() {
  const { control } = useForm();

  return (
    <ScrollViewLayout className="bg-white">
      <View style={{ width: "100%" }}>
        <Image
          source={loginHeader}
          alt="signup header"
          style={{ width: screenWidth, height: 280 }}
          resizeMode="cover"
        />
        <Arc />
      </View>

      <Link
        href="/"
        className="flex flex-row items-center absolute top-10 ml-5"
      >
        <View>
          <Image
            source={circledArrow}
            alt="signup header"
            style={{ width: 44, height: 44 }}
            resizeMode="cover"
          />
        </View>
      </Link>

      <TailwindText
        variant="heading1"
        className="text-white pl-5 absolute top-36"
      >
        Log In
      </TailwindText>

      <View className="mx-8">
        <CustomInput
          name="email"
          label="Email Address"
          control={control}
          placeholder="e.g. johndoesmith@gmail.com"
          rules={{ required: "First name is required" }}
        />

        <CustomInput
          name="password"
          label="Password"
          control={control}
          placeholder="*******"
          rules={{ required: "Phone Number is required" }}
          secureTextEntry
        />

        <TailwindText
          variant="bodyText2"
          className="pb-6 text-navy_blue font-MontserratLight"
        >
          Forgot password? click{" "}
          <Link href="/signup">
            <TailwindText variant="bodyText2" className="text-orange_100">
              here{" "}
            </TailwindText>
          </Link>
          <TailwindText variant="bodyText2" className="text-navy_blue">
            to reset
          </TailwindText>
        </TailwindText>
        <CustomButton title="Finish" className="mt-5 mb-7" href="/(tabs)" />
        <TextBetweenLines text="Or login with" />

        <Social />

        <TailwindText
          style={{
            textShadowColor: "rgba(0, 0, 0, 0.25)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
          variant="bodyText2"
          className="text-center pb-5"
        >
          Don’t have an account?{" "}
          <Link href="/signup">
            <TailwindText variant="bodyText2" className="font-MontserratMedium">
              Sign Up
            </TailwindText>
          </Link>
        </TailwindText>
      </View>
    </ScrollViewLayout>
  );
}

const styles = StyleSheet.create({});
