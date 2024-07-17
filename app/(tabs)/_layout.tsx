import {
  Tabs,
  router,
  useLocalSearchParams,
  usePathname,
  useRouter,
  useSegments,
} from "expo-router";
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
  const router = useRouter();

  // Listen to route changes and update active tab
  useEffect(() => {
    if (pathName) {
      setActiveTab(pathName);
    }
  }, [pathName]);

  const navigationState = [
    { routeName: "index", title: "Home", icon: TabHomeIcon },
    { routeName: "sermons/index", title: "Sermons", icon: TabSermonIcon },
    { routeName: "podcasts/index", title: "Podcasts", icon: TabPodcastIcon },
    {
      routeName: "resources/index",
      title: "Resources",
      icon: TabResourcesIcon,
    },
  ];

  const renderIcon = ({ route, focused }: any) => {
    const IconComponent: any = navigationState.find(
      (item) => item.routeName === route.name
    )?.icon;
    return <IconComponent focused={focused} />;
  };

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
        name="podcasts/index"
        options={{
          title: "Podcasts",
          tabBarIcon: ({ focused }) => <TabPodcastIcon focused={focused} />,
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

      <Tabs.Screen
        name="resources/kids"
        options={{
          href: null,
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
    // <Tabs
    //   selectedIndex={navigationState.findIndex(
    //     (tab) => tab.routeName === activeTab
    //   )}
    //   onSelect={(index: string | number) =>
    //     setActiveTab(navigationState[index].routeName)
    //   }
    //   screenOptions={({ route }) => ({
    //     tabBarIcon: ({ focused }) => renderIcon({ route, focused }),
    //     tabBarActiveTintColor: CustomColor.orange,
    //     tabBarInactiveTintColor: "#02387c",
    //     tabBarStyle: {
    //       height: 88,
    //       borderTopRightRadius: 12,
    //       borderTopLeftRadius: 12,
    //     },
    //     tabBarLabelStyle: {
    //       fontSize: 12,
    //       margin: 0,
    //       fontWeight: "400",
    //       fontFamily: "MontserratMedium",
    //       letterSpacing: -0.2,
    //       marginBottom: 18,
    //     },
    //   })}
    // >
    //   {navigationState.map(({ routeName, title }) => (
    //     <Tabs.Screen key={routeName} name={routeName} options={{ title }} />
    //   ))}
    // </Tabs>
  );
}
