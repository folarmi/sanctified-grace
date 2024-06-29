import React from "react";
import { View, Button } from "react-native";
import { BallIndicator } from "react-native-indicators";

type LoaderProps = {
  loading: boolean;
};

const Loader = ({ loading }: LoaderProps) => {
  return (
    <View className="flex-1 justify-center items-center">
      {loading && <BallIndicator color={"#000"} size={50} />}
    </View>
  );
};

export default Loader;
