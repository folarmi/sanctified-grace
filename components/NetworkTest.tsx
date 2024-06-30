import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const NetworkTest = ({ url }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const testURL = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setSuccess(true);
      } catch (err) {
        setError(err.message);
      }
    };
    testURL();
  }, [url]);

  return (
    <View>
      {success ? (
        <Text>URL is accessible</Text>
      ) : (
        <Text>Error accessing URL: {error}</Text>
      )}
    </View>
  );
};

export default NetworkTest;
