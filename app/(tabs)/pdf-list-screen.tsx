import React from "react";
import { Text, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";

interface PdfFile {
  id: string;
  title: string;
  path: any; // The type here can be `require` path
}

const pdfFiles: PdfFile[] = [
  {
    id: "1",
    title: "Document1.pdf",
    path: require("../../assets/hymns/Hymn_1_1.pdf"),
  },
  {
    id: "2",
    title: "Document2.pdf",
    path: require("../../assets/hymns/Hymn_1_2.pdf"),
  },
];

const PDFListScreen: React.FC = () => {
  const router = useRouter();
  const handleSelect = (pdfId: string) => {
    router.push(`${pdfId}`);
  };

  return (
    <FlatList
      data={pdfFiles}
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleSelect(item.id)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default PDFListScreen;
