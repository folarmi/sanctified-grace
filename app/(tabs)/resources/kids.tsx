import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import PdfViewer from "@/components/PDFViewer";
import WebView from "react-native-webview";

export default function kids() {
  return (
    <View>
      <Text>kids</Text>
      {/* <PdfViewer pdfFile={require("../../../assets/hymns/Hymn_1_1.pdf")} /> */}
      <View style={{ flex: 1 }}>
        <WebView
          originWhitelist={["*"]}
          source={{
            uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          }}
          style={{ marginTop: 20, height: 500, width: 350 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onLoad={(event) => console.log("WebView loaded", event.nativeEvent)}
          onError={(event) => console.error("WebView error", event.nativeEvent)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
