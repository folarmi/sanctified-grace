import { StyleSheet, Image, View } from "react-native";
import React from "react";
import ScrollViewLayout from "@/components/ScrollViewLayout";
import loginHeader from "@/assets/images/loginHeader.png";
import { screenWidth } from "@/utils";
import Arc from "@/components/Arc";
import circledArrow from "@/assets/images/circledArrow.png";
import TailwindText from "@/components/TailwindText";
import CustomInput from "@/components/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import TextBetweenLines from "@/components/TextBetweenLines";
import Social from "@/components/Social";
import { Link, useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import api from "./lib/axios";
import { LoginData } from "@/utils/types";
import { Toast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function login() {
  const { control, handleSubmit } = useForm();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await api.post("/auth/login", data);
      return response;
    },
    onSuccess: async (data) => {
      await AsyncStorage.setItem(
        "accessToken",
        data?.data?.data?.sessionAuth?.accessToken
      );
      const jsonValue = JSON.stringify(data?.data?.data?.user);
      await AsyncStorage.setItem("userObject", jsonValue);
      Toast.show(data?.data?.data?.message, {
        type: "success",
        placement: "top",
      });
      router.navigate("(tabs)");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const onSubmit: SubmitHandler<LoginData> = (values) => {
    const formValues: LoginData = {
      // email: values.email,
      // password: values.password,
      email: "test@Testmail.com",
      password: "mayflower",
    };
    loginMutation.mutate(formValues);
  };

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
          // rules={{ required: "Email Address is required" }}
        />

        <CustomInput
          name="password"
          label="Password"
          control={control}
          placeholder="*******"
          // rules={{ required: "Password is required" }}
          isSecure={true}
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
        <CustomButton
          onPress={handleSubmit(onSubmit)}
          title="Finish"
          className="mt-5 mb-7"
          disabled={loginMutation.isPending}
          isLoading={loginMutation.isPending}
        />
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
