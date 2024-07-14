import React from "react";
import { View } from "react-native";
import Pdf from "react-native-pdf";

const ReadPDF = () => {
  const PdfResource = { uri: "../assets/hymns/Hymn_1_1.pdf", cache: true };
  return (
    <View>
      <Pdf
        trustAllCerts={false}
        source={PdfResource}
        style={{
          backgroundColor: "red",
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
      />
    </View>
  );
};

export default ReadPDF;
