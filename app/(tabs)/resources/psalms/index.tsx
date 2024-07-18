import { Image, Pressable, ScrollView, TextInput, View } from "react-native";
import React, { useState } from "react";
import TailwindText from "@/components/TailwindText";
import heart from "@/assets/images/heart.png";
import ashSearchIcon from "@/assets/images/ashSearchIcon.png";
import downArrow from "@/assets/images/downArrow.png";
import { screenHeight } from "@/utils";
import TabItemIcon from "@/assets/svgs/TabItemIcon";
import { psalmsAndHymnsData } from "@/data";
import PDFListScreen from "../../pdf-list-screen";
import PsalmsAndHymnsHeader from "@/components/PsalmsAndHymnsHeader";

export default function index() {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Theme",
    },
    {
      id: 2,
      name: "Index",
    },
  ]);
  const [isActiveTab, setIsActiveTab] = useState("Theme");
  const [selectedPdf, setSelectedPdf] = useState<any | null>(null);

  const handleSelectPdf = (pdfPath: any) => {
    console.log(pdfPath);
    setSelectedPdf(pdfPath);
  };

  return (
    <View className="flex">
      <View className={`absolute top-0 left-0 right-0 z-10 bg-white`}>
        <PsalmsAndHymnsHeader />
        <View className="flex justify-between flex-row items-center py-3 bg-ash_100 px-6">
          {tabs.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => setIsActiveTab(item?.name)}
                className={`w-[167px] py-[10px] px-14 rounded-lg ${
                  isActiveTab === item?.name ? "bg-blue_100 " : "bg-white"
                }`}
              >
                <View className="flex flex-row items-center">
                  {index === 1 && <TabItemIcon isActiveTab={isActiveTab} />}
                  <TailwindText
                    variant="bodyText2"
                    className={`${
                      isActiveTab === item.name
                        ? "text-white"
                        : "text-navy_blue"
                    }`}
                  >
                    {item?.name}
                  </TailwindText>
                </View>
              </Pressable>
            );
          })}
        </View>

        <View className="bg-white flex flex-row items-center justify-between py-3 px-6 border-t border-b border-b-ash_300 border-t-ash_300">
          <View className="relative rounded-lg bg-ash_200">
            <Image
              source={ashSearchIcon}
              className="w-6 h-6 absolute top-4 ml-4"
            />

            <View className="mr-4">
              <TextInput
                placeholder="Search for a Hymn"
                className="w-[286px] font-MontserratLight font-bodyText2 py-3 pl-10"
              />
            </View>
          </View>

          <Image source={heart} className="w-11 h-11 pl-3" />
        </View>
      </View>

      <ScrollView className={`pt-[200px] pb-4 h-[${screenHeight}]`}>
        {isActiveTab === "Theme" && (
          <View>
            {psalmsAndHymnsData?.map(({ id, name, psalms }) => {
              return (
                <View
                  className="flex flex-row items-center justify-between bg-white py-5 px-7 border-b border-ash_200"
                  key={id}
                >
                  <View>
                    <TailwindText variant="bodyText1">{name}</TailwindText>
                    <TailwindText variant="footer">{psalms}</TailwindText>
                  </View>

                  <Image source={downArrow} className="w-6 h-6" />
                </View>
              );
            })}
          </View>
        )}

        {isActiveTab === "Index" && (
          <View className="">
            <PDFListScreen />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
