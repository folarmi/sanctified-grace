import { Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { CustomColor } from "@/components/CustomColor";
import TabHomeIcon from "@/assets/svgs/TabHomeIcon";
import TabSermonIcon from "@/assets/svgs/TabSermonIcon";
import TabPodcastIcon from "@/assets/svgs/TabPodcastsIcon";
import TabResourcesIcon from "@/assets/svgs/TabResourcesIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: CustomColor.orange,
        tabBarInactiveTintColor: "#02387c",
        headerShown: false,
        tabBarStyle: {
          height: 88,
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
        name="sermons"
        options={{
          title: "Sermons",
          tabBarIcon: ({ focused }) => <TabSermonIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="podcasts/index"
        options={{
          title: "Podcasts",
          tabBarIcon: ({ color, focused }) => (
            <TabPodcastIcon focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="podcasts/[id]"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="settings/index"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="settings/userProfile"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="settings/inbox"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="settings/savedSermons"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="settings/notifications"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="resources/index"
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => <TabResourcesIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="resources/todayDevotional"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="resources/todayBibleReading"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="resources/bookSummary"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="resources/blogs/index"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="resources/blogs/[id]"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="resources/psalms/index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
