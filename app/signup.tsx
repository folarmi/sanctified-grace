import { Image, View } from "react-native";
import React from "react";
import ScrollViewLayout from "@/components/ScrollViewLayout";
import { screenWidth } from "@/utils";
import signupHeader from "@/assets/images/signupHeader.png";
import circledArrow from "@/assets/images/circledArrow.png";
import Arc from "@/components/Arc";
import TailwindText from "@/components/TailwindText";
import CustomInput from "@/components/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import TextBetweenLines from "@/components/TextBetweenLines";
import { Link, useRouter } from "expo-router";
import Social from "@/components/Social";
import api from "./lib/axios";
import { useMutation } from "@tanstack/react-query";
import { FormData } from "@/utils/types";
import { Toast } from "react-native-toast-notifications";

export default function signup() {
  const { control, handleSubmit } = useForm();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await api.post("/auth/register", data);
      return response;
    },
    onSuccess: (data) => {
      Toast.show(data?.data?.data?.message, {
        type: "success",
        placement: "top",
      });
      router.navigate("/login");
    },
    onError: (error: any) => {
      Toast.show(error?.response?.data?.error, {
        type: "error",
        placement: "top",
      });
    },
  });

  const onSubmit: SubmitHandler<FormData> = (values) => {
    const formValues: FormData = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone_number: values.phone_number,
      password: values.password,
      // first_name: "test",
      // last_name: "test",
      // email: "test@Testmail.com",
      // phone_number: "08259566789",
      // password: "Password1@",
    };
    mutation.mutate(formValues);
  };

  return (
    <ScrollViewLayout className="bg-white dark:bg-dark_mode">
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
          name="first_name"
          label="First Name"
          control={control}
          placeholder="E.g John Doe"
          rules={{ required: "First name is required" }}
        />

        <CustomInput
          name="last_name"
          label="Last Name"
          control={control}
          placeholder="E.g John Doe"
          rules={{ required: "Last name is required" }}
        />

        <CustomInput
          name="phone_number"
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
          rules={{ required: "Email is required" }}
        />

        <CustomInput
          name="password"
          label="Password"
          control={control}
          placeholder="*******"
          rules={{ required: "Password is required" }}
          secureTextEntry
        />

        <CustomInput
          name="confirmPassword"
          label="Confrim Password"
          control={control}
          placeholder="*******"
          // rules={{ required: "Phone Number is required" }}
          secureTextEntry
        />
        <CustomButton
          title="Finish"
          className="mt-5 mb-7"
          onPress={handleSubmit(onSubmit)}
          disabled={mutation.isPending}
          isLoading={mutation.isPending}
        />
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
