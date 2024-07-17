import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

const ReadFirstLine = () => {
  const [firstLine, setFirstLine] = useState("");
  const [pdfUri, setPdfUri] = useState("");

  useEffect(() => {
    const loadPdf = async () => {
      // Load the PDF asset
      const asset = Asset.fromModule(require("../assets/hymns/Hymn_1_2.pdf"));
      await asset.downloadAsync();

      // Read the PDF file as a Base64 string
      const pdfBytes = await FileSystem.readAsStringAsync(
        asset.localUri || "",
        {
          encoding: FileSystem.EncodingType.Base64,
        }
      );

      // Construct a data URL
      const pdfDataUri = `data:application/pdf;base64,${pdfBytes}`;
      setPdfUri(pdfDataUri);
    };

    loadPdf();
  }, []);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>PDF Viewer</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.min.js"></script>
    </head>
    <body>
      <script>
        document.addEventListener("DOMContentLoaded", function() {
          var loadingTask = pdfjsLib.getDocument('${pdfUri}');
          loadingTask.promise.then(function(pdf) {
            pdf.getPage(1).then(function(page) {
              page.getTextContent().then(function(textContent) {
                var firstLine = textContent.items[0].str;
                window.ReactNativeWebView.postMessage(firstLine);
              });
            });
          });
        });
      </script>
    </body>
    </html>
  `;

  return (
    <View style={{ flex: 1 }}>
      {pdfUri ? (
        <WebView
          originWhitelist={["*"]}
          source={{ html: htmlContent }}
          onMessage={(event) => {
            setFirstLine(event.nativeEvent.data);
            console.log(event);
          }}
          style={{ flex: 1 }}
        />
      ) : (
        <Text>Loading...</Text>
      )}
      {firstLine && <Text style={{ margin: 20 }}>First Line: {firstLine}</Text>}
    </View>
  );
};

export default ReadFirstLine;
