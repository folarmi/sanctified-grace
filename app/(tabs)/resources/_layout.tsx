import { Stack } from "expo-router";

const ResourcesLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="bookSummary"></Stack.Screen>
    </Stack>
  );
};

export default ResourcesLayout;
