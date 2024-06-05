import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { CustomColor } from "@/components/CustomColor";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: CustomColor.orange,
        tabBarInactiveTintColor: CustomColor.blue_100,
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
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
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
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "book" : "book-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="resources/todayDevotional"
        options={{
          href: null,
        }}
      />
      {/* <Tabs.Screen
        key="index"
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <TabHomeIcon focused={focused} />,
        }}
      /> */}
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      /> */}
    </Tabs>
  );
}

{
  /* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="createAccount" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
And here is my tabs layout

 <Tabs
      screenOptions={{
        tabBarActiveTintColor: CustomColor.orange,
        tabBarInactiveTintColor: CustomColor.blue_100,
        headerShown: false,
        tabBarStyle: {
          // paddingVertical: 10,
          height: 88,
        },
        // tabBarIconStyle: { marginBottom: -5 },
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
        key="index"
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <TabHomeIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        key="sermons"
        name="sermons"
        options={{
          title: "Sermons",
          tabBarIcon: ({ focused }) => <TabPodcastIcon focused={focused} />,
          href: "sermons",
        }}
      />

      <Tabs.Screen
        name="Podcasts/index"
        options={{
          title: "Podcasts",
          tabBarIcon: ({ focused }) => <TabHomeIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        key="Podcasts/[id]"
        name="Podcasts/[id]"
        options={{
          title: "Podcasts",
          tabBarIcon: ({ focused }) => <TabHomeIcon focused={focused} />,
          href: null,
        }}
      />

      <Tabs.Screen
        name="Resources/index"
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => <TabResourcesIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        key="Resources/bibleReading"
        name="Resources/bibleReading"
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => <TabResourcesIcon focused={focused} />,
          href: null,
        }}
      />

      <Tabs.Screen
        key="Resources/todayDevotional"
        name="Resources/todayDevotional"
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => <TabResourcesIcon focused={focused} />,
          href: null,
        }}
      />

      <Tabs.Screen
        name="Resources/blogPost/index"
        options={{
          tabBarIcon: ({ focused }) => <TabResourcesIcon focused={focused} />,
          href: null,
        }}
      />

      <Tabs.Screen
        name="Resources/blogPost/[id]"
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => <TabResourcesIcon focused={focused} />,
          href: null,
        }}
      />

      <Tabs.Screen
        key="settings"
        name="Settings/index"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        key="settings/userProfile"
        name="Settings/userProfile"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        key="settings/inbox"
        name="Settings/inbox"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        key="settings/savedSermons"
        name="Settings/savedSermons"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        key="settings/notification"
        name="Settings/notification"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        key="settings/accessibility"
        name="Settings/accessibility"
        options={{
          href: null,
        }}
      />
    </Tabs> */
}
