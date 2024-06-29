import React, { useState, useEffect } from "react";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import TabHomeIcon from "./TabHomeIcon";
import TabSermonIcon from "./TabSermonIcon";
import TabPodcastIcon from "./TabPodcastIcon";
import TabResourcesIcon from "./TabResourcesIcon";
import { useRouter } from "expo-router";

const MyTabs = ({ isFullPlayer }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("index");

  // Listen to route changes and update active tab
  useEffect(() => {
    const handleNavigation = () => {
      const currentRoute = router.getCurrentRoute();
      setActiveTab(currentRoute.name);
    };

    router.addListener("routeChange", handleNavigation);
    // Cleanup listener on unmount
    return () => {
      router.removeListener("routeChange", handleNavigation);
    };
  }, [router]);

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

  const renderIcon = ({ route, focused }) => {
    const IconComponent = navigationState.find(
      (item) => item.routeName === route.name
    )?.icon;
    return <IconComponent focused={focused} />;
  };

  return (
    <Tabs
      selectedIndex={navigationState.findIndex(
        (tab) => tab.routeName === activeTab
      )}
      onSelect={(index) => setActiveTab(navigationState[index].routeName)}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => renderIcon({ route, focused }),
        tabBarActiveTintColor: CustomColor.orange,
        tabBarInactiveTintColor: "#02387c",
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
      })}
    >
      {navigationState.map(({ routeName, title }) => (
        <Tabs.Screen key={routeName} name={routeName} options={{ title }} />
      ))}
    </Tabs>
  );
};

export default MyTabs;
