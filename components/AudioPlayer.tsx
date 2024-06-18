import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import playIcon from "@/assets/images/playIcon.png";
import rewind from "@/assets/images/rewind.png";
import forward from "@/assets/images/forward.png";
import pauseIcon from "@/assets/images/pause.png";
import TailwindText from "./TailwindText";
import { Link } from "expo-router";

export default function AudioPlayer({ nowPlaying }: any) {
  const [sound, setSound] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  async function togglePlayPause() {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    } else {
      const { sound } = await Audio.Sound.createAsync(
        {
          uri: nowPlaying?.audioUrl,
        },
        { shouldPlay: true }
      );
      setSound(sound);
      setIsPlaying(true);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Link
      href={`sermons/${nowPlaying?._id}`}
      className="absolute bottom-0 left-0 right-0 bg-white px-4 py-2"
      style={{ width: "100%" }}
    >
      <View className="flex flex-row justify-between items-center w-full">
        <View className="flex flex-row items-center">
          <View className="rounded-lg mr-2 overflow-hidden">
            <Image
              source={{ uri: nowPlaying?.thumbnailUrl }}
              style={styles.logo}
            />
          </View>

          <View>
            <TailwindText variant="bodyText4">{nowPlaying?.title}</TailwindText>
            <TailwindText variant="footer" className="pt-[2px]">
              {`${nowPlaying?.preacher?.first_name} ${nowPlaying?.preacher?.last_name}`}
            </TailwindText>
          </View>
        </View>

        <View className="flex flex-row">
          <TouchableOpacity className="mr-4">
            <Image source={rewind} className="w-5 h-5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayPause} className="mr-4">
            <Image
              source={isPlaying ? pauseIcon : playIcon}
              className="w-5 h-5"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={forward} className="w-5 h-5" />
          </TouchableOpacity>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 44,
    height: 44,
  },
});
