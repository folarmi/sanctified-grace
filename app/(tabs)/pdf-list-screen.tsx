import React from "react";
import { Text, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { hymnObjects, pdfFiles } from "@/data/pdfFiles";
import TailwindText from "@/components/TailwindText";

interface PdfFile {
  id: string;
  title: string;
  path: any; // The type here can be `require` path
}

const PDFListScreen: React.FC = () => {
  const router = useRouter();
  const handleSelect = (pdfId: string) => {
    router.push(`${pdfId}`);
  };

  return (
    <FlatList
      // data={hymnObjects}
      data={pdfFiles}
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
