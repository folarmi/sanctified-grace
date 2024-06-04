import { Image, View } from "react-native";
import React from "react";
import ScrollViewLayout from "@/components/ScrollViewLayout";
import { screenWidth } from "@/utils";
import signupHeader from "@/assets/images/signupHeader.png";
import circledArrow from "@/assets/images/circledArrow.png";
import Arc from "@/components/Arc";
import TailwindText from "@/components/TailwindText";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import TextBetweenLines from "@/components/TextBetweenLines";
import { Link } from "expo-router";
import Social from "@/components/Social";

export default function signup() {
  const { control } = useForm();

  return (
    <ScrollViewLayout className="bg-white">
      <View style={{ width: "100%" }}>
        <Image
          source={signupHeader}
          alt="signup header"
          style={{ width: screenWidth, height: 230 }}
          resizeMode="cover"
        />
        <Arc />
      </View>

      <Link href="/" className="absolute top-10 ml-5">
        <View className="flex flex-row items-center">
          <Image
            source={circledArrow}
            alt="signup header"
            style={{ width: 44, height: 44 }}
            resizeMode="cover"
          />
          <TailwindText variant="heading1" className="text-white pl-14">
            Sign up
          </TailwindText>
        </View>
      </Link>

      <View className="mx-8">
        <CustomInput
          name="firstName"
          label="Name"
          control={control}
          placeholder="E.g John Doe"
          rules={{ required: "First name is required" }}
        />

        <CustomInput
          name="phoneNumber"
          label="Phone Number"
          control={control}
          placeholder="+234"
          rules={{ required: "Phone Number is required" }}
        />

        <CustomInput
          name="email"
          label="Email"
          control={control}
          placeholder="e.g. johndoesmith@gmail.com"
          rules={{ required: "Phone Number is required" }}
        />

        <CustomInput
          name="password"
          label="Password"
          control={control}
          placeholder="*******"
          rules={{ required: "Phone Number is required" }}
          secureTextEntry
        />

        <CustomInput
          name="confirmPassword"
          label="Confrim Password"
          control={control}
          placeholder="*******"
          rules={{ required: "Phone Number is required" }}
          secureTextEntry
        />
        <CustomButton title="Finish" className="mt-5 mb-7" />
        <TextBetweenLines text="Or create an Account in" />

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
          Have an account already?{" "}
          <Link href="/login">
            <TailwindText variant="bodyText2" className="font-MontserratMedium">
              Log in
            </TailwindText>
          </Link>
        </TailwindText>
      </View>
    </ScrollViewLayout>
  );
}
