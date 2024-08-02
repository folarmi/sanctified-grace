import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import { useLocalSearchParams } from "expo-router";

import PsalmsAndHymnsHeader from "@/components/PsalmsAndHymnsHeader";
import Loader from "@/components/Loader";
import { hymnObjects } from "@/data/pdfFilesThree";

const PdfViewerScreen: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        if (!id) return;

        const pdfFile = hymnObjects.find((file) => file.id === id);
        if (!pdfFile) throw new Error("PDF file not found");

        const asset = Asset.fromModule(pdfFile.path);
        await asset.downloadAsync();
        const fileUri = asset.localUri;
        if (fileUri) {
          const fileBase64 = await FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          setPdfBase64(fileBase64);
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    loadPdf();
  }, [id]);

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 700,
          height: 700,
        }}
      >
        <Text>Error loading PDF: {error}</Text>
      </View>
    );
  }

  if (!pdfBase64) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 700,
          height: 700,
        }}
      >
        {/* <ActivityIndicator size="large" /> */}
        <Loader />
      </View>
    );
  }

  const htmlContent = `
  <html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></script>
  </head>
  <body>
    <div>
      <canvas id="pdfRenderer"></canvas>
    </div>
    <script>
      const pdfData = "${pdfBase64}";
      const loadingTask = pdfjsLib.getDocument({ data: atob(pdfData) });

      loadingTask.promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
          const scale = 3;
          const viewport = page.getViewport({ scale });

          const canvas = document.getElementById('pdfRenderer');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          page.render(renderContext);
        });
      });
    </script>
  </body>
  </html>
`;

  return (
    <View style={{ flex: 1 }}>
      <PsalmsAndHymnsHeader />
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
        onError={(error) => console.error("WebView error:", error)}
      />
    </View>
  );
};

export default PdfViewerScreen;
