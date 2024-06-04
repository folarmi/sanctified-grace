import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

interface CustomScrollViewProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollViewLayout({
  children,
  className,
}: CustomScrollViewProps) {
  return (
    <ScrollView
      className={className}
      contentContainerStyle={
        {
          // paddingTop: 10,
        }
      }
    >
      <StatusBar style="dark" />
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
