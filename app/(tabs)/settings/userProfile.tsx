import React, { useContext, useState } from "react";
import Header from "@/components/Header";
import SettingsHeader from "@/components/SettingsHeader";
import defaultAvatar from "@/assets/images/defaultAvatar.png";
import { Image, View } from "react-native";
import TailwindText from "@/components/TailwindText";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import { screenHeight } from "@/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "@/context/AppContext";

export default function userProfile() {
  // const [userInfo, setUserInfo] = useState({});
  const { userInfo } = useContext(AppContext);
  console.log("hjhh", userInfo);

  // const getUserObject = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("userObject");
  //     setUserInfo(JSON.parse(jsonValue));
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     // read error
  //   }
  // };

  const { control } = useForm({
    defaultValues: userInfo,
  });

  return (
    <Header className="bg-white">
      <SettingsHeader text="User Profile" />

      <View className={`bg-white h-{${screenHeight}}`}>
        <View className="flex justify-center items-center">
          <Image source={defaultAvatar} className="w-[83px] h-[83px] my-5" />
          <TailwindText variant="bodyText1" className="pb-9">
            Full Name
          </TailwindText>
        </View>

        <View className="w-full px-6">
          <View className="flex flex-row items-center">
            <View className="mr-3 w-1/2">
              <CustomInput
                name="email"
                label="First Name"
                control={control}
                placeholder="e.g. johndoesmith@gmail.com"
                rules={{ required: "First Name is required" }}
              />
            </View>

            <View className="w-1/2">
              <CustomInput
                name="email"
                label="Last Name"
                control={control}
                placeholder="e.g. johndoesmith@gmail.com"
                rules={{ required: "Last Name is required" }}
              />
            </View>
          </View>

          <CustomInput
            name="email"
            label="Password"
            control={control}
            placeholder="e.g. johndoesmith@gmail.com"
            rules={{ required: "Last Name is required" }}
          />

          <CustomInput
            name="Password"
            label="Email"
            control={control}
            placeholder="e.g. johndoesmith@gmail.com"
            rules={{ required: "Last Name is required" }}
            secureTextEntry
          />

          <CustomButton title="Delete Profile" className="mb-8 mt-28" />
        </View>
      </View>
    </Header>
  );
}
