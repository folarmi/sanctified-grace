import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { WebView } from "react-native-webview";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import { useLocalSearchParams } from "expo-router";
import { hymnObjects } from "@/data/pdfFiles";
import TailwindText from "@/components/TailwindText";
import leftArrow from "@/assets/images/leftArrow.png";
import defaultAvatar from "@/assets/images/defaultAvatar.png";
import { useRouter } from "expo-router";

const PdfViewerScreen: React.FC = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGoBack = () => {
    router.back();
  };

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
        <ActivityIndicator size="large" />
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
          const scale = 1.5;
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
      <View className="w-full flex flex-row items-center mt-8 p-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => handleGoBack()}>
          <Image source={leftArrow} className="w-6 h-6 mr-3" />
        </TouchableOpacity>
        <TailwindText variant="subHeading1">Psalms & Hymns</TailwindText>
        <View className="w-full ml-8">
          <Image source={defaultAvatar} className="w-11 h-11" />
        </View>
      </View>

      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        style={{ flex: 1 }}
        onError={(error) => console.error("WebView error:", error)}
      />
    </View>
  );
};

export default PdfViewerScreen;
