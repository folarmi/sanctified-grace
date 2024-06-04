// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });

// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname);

// // Configure for nativewind
// const nativeWindConfig = withNativeWind(config, { input: "./global.css" });

// // Add support for react-native-svg
// nativeWindConfig.transformer.babelTransformerPath = require.resolve(
//   "react-native-svg-transformer"
// );
// nativeWindConfig.resolver.assetExts =
//   nativeWindConfig.resolver.assetExts.filter((ext) => ext !== "svg");
// nativeWindConfig.resolver.sourceExts = [
//   ...nativeWindConfig.resolver.sourceExts,
//   "svg",
// ];

// module.exports = nativeWindConfig;
