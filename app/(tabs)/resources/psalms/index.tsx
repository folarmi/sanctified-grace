import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import TailwindText from "@/components/TailwindText";
import heart from "@/assets/images/heart.png";
import ashSearchIcon from "@/assets/images/ashSearchIcon.png";
import downArrow from "@/assets/images/downArrow.png";
import upArrow from "@/assets/images/upArrow.png";
import { capitalizeEachWord, formatString, screenHeight } from "@/utils";
import PDFListScreen from "../../pdf-list-screen";
import PsalmsAndHymnsHeader from "@/components/PsalmsAndHymnsHeader";
import { psalmsAndHymnsData } from "@/data/hymnsWithTheme";
import { useRouter } from "expo-router";
import whiteIndex from "@/assets/images/whiteIndex.png";
import blueIndex from "@/assets/images/blueIndex.png";
import { CustomColor } from "@/components/CustomColor";
import ThemeContext from "@/app/context/ThemeContext";
import DownArrow from "@/assets/svgs/DownArrow";

export default function Index() {
  const router = useRouter();
  const handleSelect = (pdfId: string) => {
    router.push(`resources/psalms/${pdfId}`);
  };
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
  const [selectedTheme, setSelectedTheme] = useState(
    "THE SPIRIT OF THE PSALMS"
  );
  const [showHymns, setShowHymns] = useState(false);
  const { isDarkMode } = useContext<any>(ThemeContext);

  const toggleHymns = (category: string) => {
    setSelectedTheme(category);
    setShowHymns(!showHymns);
  };

  return (
    <View className="flex">
      <View
        className={`absolute top-0 left-0 right-0 z-10 bg-white dark:bg-black`}
      >
        <PsalmsAndHymnsHeader />
        <View className="flex flex-row items-center py-3 px-6">
          {tabs.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => setIsActiveTab(item?.name)}
                className={`w-[167px] py-[10px] px-14 rounded-lg mr-3`}
                style={{
                  backgroundColor:
                    isActiveTab === item?.name
                      ? isDarkMode
                        ? CustomColor.dark_mode
                        : CustomColor.blue_100
                      : isDarkMode
                      ? CustomColor.dark_mode
                      : CustomColor.white,
                }}
              >
                <View className="flex flex-row items-center">
                  {index === 1 &&
                    (isActiveTab === item?.name ? (
                      <Image source={whiteIndex} className="w-6 h-6 mr-2" />
                    ) : (
                      <Image source={blueIndex} className="w-6 h-6 mr-2" />
                    ))}
                  <TailwindText
                    variant="bodyText2"
                    style={{
                      color:
                        isActiveTab === item.name
                          ? isDarkMode
                            ? CustomColor.ash_500
                            : CustomColor.white
                          : isDarkMode
                          ? CustomColor.ash_500
                          : CustomColor.navy_blue,
                    }}
                  >
                    {item?.name}
                  </TailwindText>
                </View>
              </Pressable>
            );
          })}
        </View>

        <View className="bg-white dark:bg-black flex flex-row items-center justify-between py-3 px-6 border-t border-b border-b-ash_300 border-t-ash_300 dark:border-ash_600">
          <View className="relative rounded-lg bg-ash_200 dark:bg-ash_600">
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
          <View className="mt-4">
            {psalmsAndHymnsData?.map((item, index) => {
              return (
                <View key={item.category}>
                  <TouchableOpacity
                    key={item?.category}
                    onPress={() => toggleHymns(item.category)}
                  >
                    <View
                      className={`flex flex-row items-center justify-between py-5 px-7 border-b border-ash_200 dark:border-ash_600`}
                      style={{
                        backgroundColor:
                          selectedTheme === item.category && showHymns
                            ? isDarkMode
                              ? CustomColor?.dark_mode
                              : CustomColor?.blue_300
                            : isDarkMode
                            ? CustomColor?.dark_mode
                            : CustomColor?.white,
                      }}
                    >
                      <View>
                        <TailwindText
                          variant="bodyText1"
                          className="dark:text-white"
                          style={{
                            color:
                              selectedTheme === item?.category && showHymns
                                ? CustomColor.white
                                : isDarkMode
                                ? CustomColor.white
                                : CustomColor.black,
                          }}
                        >
                          {capitalizeEachWord(item?.category)}
                        </TailwindText>
                        <TailwindText
                          variant="footer"
                          style={{
                            color:
                              selectedTheme === item?.category && showHymns
                                ? CustomColor.white
                                : isDarkMode
                                ? CustomColor.white
                                : CustomColor.black,
                          }}
                        >
                          {item?.psalms}
                        </TailwindText>
                      </View>

                      {selectedTheme === item.category && showHymns ? (
                        <Image source={upArrow} className="w-6 h-6" />
                      ) : (
                        <DownArrow />
                      )}
                    </View>
                  </TouchableOpacity>

                  {selectedTheme === item.category && showHymns && (
                    <View key={index} className="dark:bg-black">
                      <FlatList
                        data={item.hymns}
                        scrollEnabled={false}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            className="border-b border-ash_200 dark:border-ash_600 py-3 pl-10 bg-white dark:bg-dark_mode"
                            onPress={() => handleSelect(item.id)}
                          >
                            <TailwindText variant="footer">
                              {formatString(
                                item.title.replace(/_/g, " ")
                              ).slice(0, -4)}
                            </TailwindText>
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        )}

        {isActiveTab === "Index" && (
          <View className="mt-4">
            <PDFListScreen />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
