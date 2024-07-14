import React from "react";
import { Text, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { hymnObjects } from "@/data/pdfFiles";
import TailwindText from "@/components/TailwindText";

const PDFListScreen: React.FC = () => {
  const router = useRouter();
  const handleSelect = (pdfId: string) => {
    router.push(`${pdfId}`);
  };

  return (
    <FlatList
      // data={hymnObjects}
      data={hymnObjects}
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="border-b border-ash_200 py-3 px-5 bg-white"
          onPress={() => handleSelect(item.id)}
        >
          <TailwindText variant="footer">{item.title}</TailwindText>
        </TouchableOpacity>
      )}
    />
  );
};

export default PDFListScreen;
// ../data/pdfFiles.tsx
