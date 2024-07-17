import { Tabs, usePathname, useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { CustomColor } from "@/components/CustomColor";
import TabHomeIcon from "@/assets/svgs/TabHomeIcon";
import TabSermonIcon from "@/assets/svgs/TabSermonIcon";
import TabPodcastIcon from "@/assets/svgs/TabPodcastsIcon";
import TabResourcesIcon from "@/assets/svgs/TabResourcesIcon";
import { AppContext } from "@/context/AppContext";

export default function TabLayout() {
  const { isFullPlayer } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState("index");
  const pathName = usePathname();

  // Listen to route changes and update active tab
  useEffect(() => {
    if (pathName) {
      setActiveTab(pathName);
    }
  }, [pathName]);

  const HomeStackScreen = "bbbbb";

  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: CustomColor.orange,
        tabBarInactiveTintColor: "#02387c",
        headerShown: false,
        tabBarStyle: {
          height: 88,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
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
      <Tabs.Screen
        name="[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
