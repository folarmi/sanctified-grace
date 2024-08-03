import { Tabs } from "expo-router";
import React, { useContext } from "react";

import { CustomColor } from "@/components/CustomColor";
import TabHomeIcon from "@/assets/svgs/TabHomeIcon";
import TabSermonIcon from "@/assets/svgs/TabSermonIcon";
import TabPodcastIcon from "@/assets/svgs/TabPodcastsIcon";
import TabResourcesIcon from "@/assets/svgs/TabResourcesIcon";
import { AppContext } from "@/context/AppContext";
import ThemeContext from "../context/ThemeContext";

export default function TabLayout() {
  const { isFullPlayer } = useContext(AppContext);
  const { isDarkMode } = useContext<any>(ThemeContext);

  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: CustomColor.orange,
        tabBarInactiveTintColor: isDarkMode
          ? CustomColor.gold_highlight
          : CustomColor.navy_blue,
        headerShown: false,
        tabBarStyle: {
          height: 88,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
          backgroundColor: isDarkMode ? CustomColor.black : CustomColor.white,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          margin: 0,
          fontWeight: "400",
          fontFamily: "MontserratMedium",
          letterSpacing: -0.2,
          marginBottom: 18,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <TabHomeIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="sermons/index"
        initialParams={{
          isFullPlayer,
        }}
        options={{
          title: "Sermons",
          tabBarIcon: ({ focused }) => <TabSermonIcon focused={focused} />,
          tabBarStyle: {
            display: isFullPlayer ? "none" : "flex",
            // display: "none",
            height: 88,
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            backgroundColor: isDarkMode ? CustomColor.black : CustomColor.white,
          },
        }}
      />

      <Tabs.Screen
        name="podcasts"
        options={{
          title: "Podcasts",
          tabBarIcon: ({ focused }) => <TabPodcastIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="resources"
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => <TabResourcesIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="pdf-list-screen"
        options={{
          href: null,
          title: "PDF List",
        }}
      />
      {/* <Tabs.Screen
        name="[id]"
        options={{
          href: null,
        }}
      /> */}
    </Tabs>
  );
}
