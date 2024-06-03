import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

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
      contentContainerStyle={{
        paddingTop: 10,
      }}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
