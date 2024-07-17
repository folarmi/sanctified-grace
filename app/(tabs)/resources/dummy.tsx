import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Dummy() {
  return (
    <View>
      <Text>Dummy page</Text>
      <Link href="tab_1/index">Navigate back</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
