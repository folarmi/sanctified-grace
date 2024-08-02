import React from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import TailwindText from "@/components/TailwindText";
import { formatString } from "@/utils";
import { hymnObjects } from "@/data/pdfFilesThree";

const PDFListScreen: React.FC = () => {
  const router = useRouter();
  const handleSelect = (pdfId: string) => {
    // router.push(`${pdfId}`);
    router.push(`resources/psalms/${pdfId}`);
  };

  return (
    <FlatList
      data={hymnObjects}
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="border-b border-ash_200 py-3 px-5 bg-white"
          onPress={() => handleSelect(item.id)}
        >
          <TailwindText variant="footer">
            {formatString(item.title.replace(/_/g, " ")).slice(0, -4)}
          </TailwindText>
        </TouchableOpacity>
      )}
    />
  );
};

export default PDFListScreen;
