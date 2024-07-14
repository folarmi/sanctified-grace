import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import leftArrow from "@/assets/images/leftArrow.png";
import TailwindText from "@/components/TailwindText";
import defaultAvatar from "@/assets/images/defaultAvatar.png";
import heart from "@/assets/images/heart.png";
// import ItemImage from "@/assets/images/Item.png";
import ashSearchIcon from "@/assets/images/ashSearchIcon.png";
import downArrow from "@/assets/images/downArrow.png";
import { screenHeight } from "@/utils";
import TabItemIcon from "@/assets/svgs/TabItemIcon";
import { psalmsAndHymnsData } from "@/data";
// import WebView from "react-native-webview";
import PDFListScreen from "../../pdf-list-screen";

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
  const [isActiveTab, setIsActiveTab] = useState("Index");

  const [selectedPdf, setSelectedPdf] = useState<any | null>(null);

  const handleSelectPdf = (pdfPath: any) => {
    console.log(pdfPath);
    setSelectedPdf(pdfPath);
  };

  return (
    <View className="flex">
      <View className={`absolute top-0 left-0 right-0 z-10 bg-white`}>
        <View className="w-full flex flex-row items-center mt-8 p-4 border-b border-gray-200">
          <Image source={leftArrow} className="w-6 h-6 mr-3" />
          <TailwindText variant="subHeading1">Psalms & Hymns</TailwindText>
          <View className="w-full ml-8">
            <Image source={defaultAvatar} className="w-11 h-11" />
          </View>
        </View>

        <View className="flex justify-between flex-row items-center py-3 bg-ash_100 px-6">
          {tabs.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => setIsActiveTab(item?.name)}
                className={` w-[167px] py-[10px] px-14 rounded-lg ${
                  isActiveTab === item?.name ? "bg-blue_100 " : "bg-white "
                }`}
              >
                <View className="flex flex-row items-center">
                  {index === 1 && (
                    // <Image source={itemImage} className="w-6 h-6 pr-2" />
                    // {item.name === "Index" ? "" : ""}
                    <TabItemIcon isActiveTab={isActiveTab} />
                  )}
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

        <View className="bg-white flex flex-row items-center justify-between py-3 px-6">
          <View className="rounded-lg border bg-ash_200 border-ash_300">
            <Image
              source={ashSearchIcon}
              className="w-6 h-6 absolute top-5 right-5"
            />
            <View className=" mr-4">
              <TextInput
                placeholder="Search for a Hymn"
                className="w-[286px] font-bodyText2 py-3 pl-2"
              />
            </View>
          </View>

          <Image source={heart} className="w-11 h-11" />
        </View>
      </View>

      <ScrollView className={`pt-72 pb-4 h-[${screenHeight}]`}>
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
          <View>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              consectetur possimus dolorum vitae officiis quibusdam a,
              reiciendis error. Ut dignissimos soluta vero eius assumenda nihil,
              rerum libero ratione, mollitia est dicta error nemo animi expedita
              minus quisquam! Inventore impedit animi necessitatibus harum
              magnam voluptas voluptatibus adipisci. Hic, voluptatum iste?
              Eligendi.
            </Text>
            {/* <PdfViewer
              pdfFile={require("../../../../assets/hymns/Hymn_1_1.pdf")}
            /> */}

            {/* <WebView
              source={{
                uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
              }}
              style={{ height: 500, width: 350 }}
            /> */}

            {/* <View style={{ flex: 1 }}>
              <WebView
                originWhitelist={["*"]}
                source={{
                  uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                }}
                style={{ marginTop: 20, height: 500, width: 350 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onLoad={(event) =>
                  console.log("WebView loaded", event.nativeEvent)
                }
                onError={(event) =>
                  console.error("WebView error", event.nativeEvent)
                }
              />
            </View> */}

            {/* <WebView
              originWhitelist={["*"]}
              source={{
                uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
              }}
              style={{ marginTop: 20, height: 500, width: 350 }}
            /> */}
            {/* <PdfListScreen /> */}
            {/* <View style={{ flex: 1 }}>
              {selectedPdf ? (
                // <PdfViewer source={selectedPdf} />
                <PdfViewer />
              ) : (
                // <PDFListScreen onSelect={handleSelectPdf} />
                <PDFListScreen />
              )}
            </View> */}
            <PDFListScreen />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
